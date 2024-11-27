import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAsistenciaMPageRoutingModule } from './ver-asistencia-m-routing.module';

import { VerAsistenciaMPage } from './ver-asistencia-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAsistenciaMPageRoutingModule
  ],
  declarations: [VerAsistenciaMPage]
})
export class VerAsistenciaMPageModule {}
