import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'details/wan', loadChildren: () => import('./pages/details/wan/wan.module').then( m => m.WanPageModule) },
  { path:'details/docker', loadChildren: () => import('./pages/details/docker/docker.module').then( m => m.DockerPageModule) },
  { path:'details/ups', loadChildren: () => import('./pages/details/ups/ups.module').then( m => m.UpsPageModule) },
  { path:'details/hosts', loadChildren: () => import('./pages/details/hosts/hosts.module').then( m => m.HostsPageModule) },
  { path:'details/servers', loadChildren: () => import('./pages/details/servers/servers.module').then( m => m.ServersPageModule) },
  { path:'details/switches', loadChildren: () => import('./pages/details/switches/switches.module').then( m => m.SwitchesPageModule) },
  { path:'details/camaras', loadChildren: () => import('./pages/details/camaras/camaras.module').then( m => m.CamarasPageModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
