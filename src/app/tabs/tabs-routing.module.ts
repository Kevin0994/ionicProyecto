import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule),
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule),
      },
      {
        path: 'vestidos',
        loadChildren: () => import('../home/vestidos/vestidos.module').then( m => m.VestidosPageModule),
      },
      {
        path: 'tops',
        loadChildren: () => import('../home/tops/tops.module').then( m => m.TopsPageModule),
      },
      {
        path: 'shorts',
        loadChildren: () => import('../home/shorts/shorts.module').then( m => m.ShortsPageModule),
      },
      {
        path: 'pantalones',
        loadChildren: () => import('../home/pantalones/pantalones.module').then( m => m.PantalonesPageModule),
      },
      {
        path: 'faldas',
        loadChildren: () => import('../home/faldas/faldas.module').then( m => m.FaldasPageModule),
      },
      {
        path: 'blusas',
        loadChildren: () => import('../home/blusas/blusas.module').then( m => m.BlusasPageModule),
      },

     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
