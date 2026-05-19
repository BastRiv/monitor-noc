import { Component, OnInit } from '@angular/core';
import { PrtgService } from 'src/app/core/services/prtg-service';
import { Ping } from 'src/app/shared/interfaces/checkmk-interface';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.page.html',
  styleUrls: ['./switches.page.scss'],
  standalone:false,
})
export class SwitchesPage implements OnInit {
  public switchesOK: Ping[] = [];
  public switchesDown: Ping[] = [];

  constructor( private prtgService: PrtgService ) { }

  ngOnInit() {
    this.prtgService.data$.subscribe(res => {
    if (!res) return;
    const ping = res?.checkmk.ping ?? [];
    const pingDown = res?.checkmk.ping_down ?? [];

    this.switchesOK   = ping.filter(c => c.folder === '/switch' && c.ok);
    this.switchesDown = pingDown.filter(c => c.folder === '/switch');
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
