import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlusasPage } from './blusas.page';

const routes: Routes = [
  {
    path: '',
    component: BlusasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlusasPageRoutingModule {}
