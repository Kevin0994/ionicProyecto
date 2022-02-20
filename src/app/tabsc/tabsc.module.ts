import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabscPageRoutingModule } from './tabsc-routing.module';

import { TabscPage } from './tabsc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabscPageRoutingModule
  ],
  declarations: [TabscPage]
})
export class TabscPageModule {}
