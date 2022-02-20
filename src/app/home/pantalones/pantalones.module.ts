import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantalonesPageRoutingModule } from './pantalones-routing.module';

import { PantalonesPage } from './pantalones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantalonesPageRoutingModule
  ],
  declarations: [PantalonesPage]
})
export class PantalonesPageModule {}
