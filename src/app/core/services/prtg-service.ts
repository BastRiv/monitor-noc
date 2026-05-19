import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, interval } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

import { ApiInterface } from 'src/app/shared/interfaces';
import { Notification } from './notification';

@Injectable({
  providedIn: 'root',
})
export class PrtgService {

  private readonly apiUrl = 'https://api.vicorp.cl:7485/api/mobile';

  private _data = new BehaviorSubject<ApiInterface | null>(null);
  public data$ = this._data.asObservable();

  private _error = new BehaviorSubject<boolean>(false);
  public error$ = this._error.asObservable();

  private estadoAnterior: ApiInterface | null = null;

  constructor(
    private http: HttpClient,
    private notificationService: Notification
  ) {
    this.notificationService.requestPermission();
    this.dataLoad().subscribe();
    this.iniciarPolling();
  }

  // ── Carga inicial y refresh manual ──────────────────────────
  dataLoad() {
    return this.http.get<ApiInterface>(this.apiUrl).pipe(
      tap(res => {
        this._error.next(false);
        this.detectarCambios(res);
        this._data.next(res);
      }),
      catchError(err => {
        console.error('Error cargando datos:', err);
        this._error.next(true);
        return EMPTY;
      })
    );
  }

  // ── Polling automático ───────────────────────────────────────
  private iniciarPolling() {
    interval(15000).pipe(
      switchMap(() =>
        this.http.get<ApiInterface>(this.apiUrl).pipe(
          catchError(err => {
            console.error('Error en polling:', err);
            if (!this._error.getValue()) {
              this.notificationService.notify(
                '⚠️ Sin conexión',
                'No se puede conectar con la API'
              );
            }
            this._error.next(true);
            return EMPTY;
          })
        )
      ),
      tap(res => {
        this._error.next(false);
        this.detectarCambios(res);
        this._data.next(res);
      })
    ).subscribe();
  }

  // ── Detección de cambios y notificaciones ────────────────────
  private detectarCambios(nuevo: ApiInterface) {
    if (!this.estadoAnterior) {
      this.estadoAnterior = nuevo;
      return;
    }

    // Docker
    nuevo.docker.items.forEach(item => {
      const anterior = this.estadoAnterior!.docker.items
        .find(d => d.name === item.name);
      if (anterior?.ok && !item.ok) {
        this.notificationService.notify(
          '🐳 Docker caído',
          `${item.name} está fuera de línea`
        );
      }
    });

    // Hosts — cámaras, switches, servidores
    nuevo.checkmk.ping_down.forEach(host => {
      const anterior = this.estadoAnterior!.checkmk.ping
        .find(p => p.host === host.host);

      if (anterior?.ok) {
        const tipo = host.folder === '/cctv'       ? '📷 Cámara caída'
                   : host.folder === '/switch'     ? '🔌 Switch/AP caído'
                   : host.folder === '/servidores' ? '🖥️ Servidor caído'
                   : '🔴 Host caído';

        this.notificationService.notify(tipo, `${host.host} no responde`);
      }
    });

    // UPS — Notificar si bajó del 50% de carga o si pasó a offline
    nuevo.ups.items.forEach(ups => {
    const anterior = this.estadoAnterior!.ups.items
      .find(u => u.name === ups.name);

    if (anterior) {
      // Notificar si bajó del 50% de carga
      if ((ups.charge ?? 100) < 50 && (anterior.charge ?? 100) >= 50) {
        this.notificationService.notify(
          '🔋 UPS con carga baja',
          `${ups.name} bajó al ${ups.charge}%`
        );
      }

      // Notificar si pasó a offline
      if (!ups.ok && anterior.ok) {
        this.notificationService.notify(
          '⚡ UPS fuera de línea',
          `${ups.name} está offline`
        );
      }
    }
  });

    this.estadoAnterior = nuevo;
  }
}