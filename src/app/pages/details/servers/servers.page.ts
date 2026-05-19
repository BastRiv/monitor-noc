import { Component, OnInit } from '@angular/core';
import { PrtgService } from 'src/app/core/services/prtg-service';
import { Ping } from 'src/app/shared/interfaces/checkmk-interface';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.page.html',
  styleUrls: ['./servers.page.scss'],
  standalone:false,
})
export class ServersPage implements OnInit {
    public serversOK: Ping[] = [];
    public serversDown: Ping[] = [];

  constructor( private prtgService: PrtgService ) { }

  ngOnInit() {
    this.prtgService.data$.subscribe(res => {
    if (!res) return;

    const ping = res?.checkmk.ping ?? [];
    const pingDown = res?.checkmk.ping_down ?? [];

    this.serversOK   = ping.filter(c => c.folder === '/servidores' && c.ok);
    this.serversDown = pingDown.filter(c => c.folder === '/servidores');
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
