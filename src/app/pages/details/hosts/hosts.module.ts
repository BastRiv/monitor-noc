import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HostsPageRoutingModule } from './hosts-routing.module';

import { HostsPage } from './hosts.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HostsPageRoutingModule,
    SharedModule
  ],
  declarations: [HostsPage]
})
export class HostsPageModule {}
