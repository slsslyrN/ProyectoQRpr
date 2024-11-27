import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfperfilPageRoutingModule } from './confperfil-routing.module';

import { ConfperfilPage } from './confperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfperfilPageRoutingModule
  ],
  declarations: [ConfperfilPage]
})
export class ConfperfilPageModule {}
