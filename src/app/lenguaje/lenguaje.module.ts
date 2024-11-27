import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LenguajePageRoutingModule } from './lenguaje-routing.module';

import { LenguajePage } from './lenguaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LenguajePageRoutingModule
  ],
  declarations: [LenguajePage]
})
export class LenguajePageModule {}
