import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPage } from './details.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPage
  },  {
    path: 'wan',
    loadChildren: () => import('./wan/wan.module').then( m => m.WanPageModule)
  },
  {
    path: 'docker',
    loadChildren: () => import('./docker/docker.module').then( m => m.DockerPageModule)
  },
  {
    path: 'ups',
    loadChildren: () => import('./ups/ups.module').then( m => m.UpsPageModule)
  },
  {
    path: 'hosts',
    loadChildren: () => import('./hosts/hosts.module').then( m => m.HostsPageModule)
  },
  {
    path: 'servers',
    loadChildren: () => import('./servers/servers.module').then( m => m.ServersPageModule)
  },
  {
    path: 'switches',
    loadChildren: () => import('./switches/switches.module').then( m => m.SwitchesPageModule)
  },
  {
    path: 'camaras',
    loadChildren: () => import('./camaras/camaras.module').then( m => m.CamarasPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPageRoutingModule {}
