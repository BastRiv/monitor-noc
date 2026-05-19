import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwitchesPageRoutingModule } from './switches-routing.module';

import { SwitchesPage } from './switches.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwitchesPageRoutingModule,
    SharedModule
  ],
  declarations: [SwitchesPage]
})
export class SwitchesPageModule {}
