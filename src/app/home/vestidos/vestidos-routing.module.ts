import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VestidosPage } from './vestidos.page';

const routes: Routes = [
  {
    path: '',
    component: VestidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VestidosPageRoutingModule {}
