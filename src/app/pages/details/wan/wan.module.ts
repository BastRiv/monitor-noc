import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WanPageRoutingModule } from './wan-routing.module';

import { WanPage } from './wan.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WanPageRoutingModule,
    SharedModule
  ],
  declarations: [WanPage]
})
export class WanPageModule {}
