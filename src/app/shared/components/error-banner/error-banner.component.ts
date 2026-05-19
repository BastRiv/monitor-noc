import { Component, OnInit } from '@angular/core';
import { PrtgService } from 'src/app/core/services/prtg-service';

@Component({
  selector: 'app-error-banner',
  templateUrl: './error-banner.component.html',
  styleUrls: ['./error-banner.component.scss'],
  standalone: false,
})
export class ErrorBannerComponent implements OnInit {

  public hasError: boolean = false;

  constructor(private prtgService: PrtgService) {}

  ngOnInit() {
    this.prtgService.error$.subscribe(err => {
      this.hasError = err;
    });
  }
}