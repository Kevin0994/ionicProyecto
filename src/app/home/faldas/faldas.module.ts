import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaldasPageRoutingModule } from './faldas-routing.module';

import { FaldasPage } from './faldas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaldasPageRoutingModule
  ],
  declarations: [FaldasPage]
})
export class FaldasPageModule {}
