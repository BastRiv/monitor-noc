import { Component, OnInit } from '@angular/core';

//Service
import { PrtgService } from 'src/app/core/services/prtg-service';

import { ApiInterface, WAN, Item, Unify, Docker, Ping } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  datosApi: ApiInterface | null = null;  

  public listaWan: WAN[] = [];
  public listaDocker: Item[] = [];
  public listaUps: Item[] = [];
  public unifi: Unify = { wifi: 0, lan: 0, total: 0 };
  public docker: Docker = { total: 0, down: 0, items: [], problems: [] };
  public totalAlertas: number = 0;
  public servidores: Ping[] = [];
  public switches: Ping[] = [];
  public camaras: Ping[] = [];
  public totalIn: number = 0;
  public totalOut: number = 0;
  public minCharge: number = 0;
  public hasError: boolean = false;

  public expanded: { [key: string]: boolean } = {
  wan: false, docker: false, ups: false,unifi: false, hosts: false,
  };

  toggle(section: string) {
  this.expanded[section] = !this.expanded[section];
  }

  constructor( private prtgService: PrtgService ) {


  }

ngOnInit() {
  this.prtgService.error$.subscribe(err => {
    this.hasError = err;
  });

  this.prtgService.data$.subscribe(res => {
    if (!res) return;

    this.listaWan     = res.checkmk.wan;
    this.docker       = res.docker;
    this.listaDocker  = res.docker.items;
    this.listaUps     = res.ups.items;
    this.unifi        = res.unifi;
    this.totalAlertas = res.alerts;
    this.totalIn      = res.checkmk.wan.reduce((acc, w) => acc + w.in_mbps, 0);
    this.totalOut     = res.checkmk.wan.reduce((acc, w) => acc + w.out_mbps, 0);
    this.minCharge    = Math.min(...res.ups.items.map(u => u.charge ?? 100));

    const ping        = res.checkmk.ping;
    this.servidores   = ping.filter(p => p.folder === '/servidores');
    this.switches     = ping.filter(p => p.folder === '/switch');
    this.camaras      = ping.filter(p => p.folder === '/cctv');
  });
}

refrescar(event: any) {
  setTimeout(() => event.target.complete(), 5000);

  this.prtgService.dataLoad().subscribe({
    next: () => event.target.complete(),
    error: () => event.target.complete()
  });
}



}
