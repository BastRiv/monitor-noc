import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ErrorBannerComponent } from './components/error-banner/error-banner.component';

@NgModule({
  declarations: [ErrorBannerComponent],
  imports: [CommonModule, IonicModule],
  exports: [ErrorBannerComponent] 
})
export class SharedModule {}