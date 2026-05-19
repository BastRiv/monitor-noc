import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DockerPageRoutingModule } from './docker-routing.module';

import { DockerPage } from './docker.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DockerPageRoutingModule,
    SharedModule
  ],
  declarations: [DockerPage]
})
export class DockerPageModule {}
