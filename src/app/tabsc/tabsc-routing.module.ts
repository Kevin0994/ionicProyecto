import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabscPage } from './tabsc.page';

const routes: Routes = [
  {
    path: '',
    component: TabscPage,
    children: [
      {
        path: 'carrito',
        loadChildren: () => import('../home/carrito/carrito.module').then( m => m.CarritoPageModule),
      },
      {
        path: 'miscompras',
        loadChildren: () => import('../home/miscompras/miscompras.module').then( m => m.MiscomprasPageModule),
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabscPageRoutingModule {}
