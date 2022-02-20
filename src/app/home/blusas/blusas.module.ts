import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlusasPageRoutingModule } from './blusas-routing.module';

import { BlusasPage } from './blusas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlusasPageRoutingModule
  ],
  declarations: [BlusasPage]
})
export class BlusasPageModule {}
