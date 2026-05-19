import { Component, OnInit } from '@angular/core';
import { Ping } from 'src/app/shared/interfaces';
import { PrtgService } from 'src/app/core/services/prtg-service';

@Component({
  selector: 'app-camaras',
  templateUrl: './camaras.page.html',
  styleUrls: ['./camaras.page.scss'],
  standalone:false,
})
export class CamarasPage implements OnInit {

  public camarasOK: Ping[] = [];
  public camarasDown: Ping[] = [];

  constructor(private prtgService: PrtgService) { }

 ngOnInit() {
  this.prtgService.data$.subscribe(res => {
    if (!res) return;

    const ping = res?.checkmk.ping ?? [];
    const pingDown = res?.checkmk.ping_down ?? [];

    this.camarasOK   = ping.filter(c => c.folder === '/cctv' && c.ok);
    this.camarasDown = pingDown.filter(c => c.folder === '/cctv');
  });
}

getIp(output: string): string {
  const match = output.match(/(\d+\.\d+\.\d+\.\d+)/);
  return match ? match[1] : '-';
}

getRta(output: string): string {
  const match = output.match(/rta\s([\d.]+ms)/);
  return match ? match[1] : '-';
}

}
