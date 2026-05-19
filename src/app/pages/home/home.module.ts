import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { DownCountPipe, OkCountPipe, OkWanPipe } from 'src/app/shared/pipes/status-count.pipe';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [
    HomePage,
    OkCountPipe,
    DownCountPipe,
    OkWanPipe,
  ]
})
export class HomePageModule {}
