import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WanPage } from './wan.page';

const routes: Routes = [
  {
    path: '',
    component: WanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WanPageRoutingModule {}
