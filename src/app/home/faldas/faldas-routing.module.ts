import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaldasPage } from './faldas.page';

const routes: Routes = [
  {
    path: '',
    component: FaldasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaldasPageRoutingModule {}
