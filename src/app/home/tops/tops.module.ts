import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopsPageRoutingModule } from './tops-routing.module';

import { TopsPage } from './tops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopsPageRoutingModule
  ],
  declarations: [TopsPage]
})
export class TopsPageModule {}
