import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VestidosPageRoutingModule } from './vestidos-routing.module';

import { VestidosPage } from './vestidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VestidosPageRoutingModule
  ],
  declarations: [VestidosPage]
})
export class VestidosPageModule {}
