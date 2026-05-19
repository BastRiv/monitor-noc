import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamarasPageRoutingModule } from './camaras-routing.module';

import { CamarasPage } from './camaras.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamarasPageRoutingModule,
    SharedModule
  ],
  declarations: [CamarasPage]
})
export class CamarasPageModule {}
