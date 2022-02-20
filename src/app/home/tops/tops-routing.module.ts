import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopsPage } from './tops.page';

const routes: Routes = [
  {
    path: '',
    component: TopsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopsPageRoutingModule {}
