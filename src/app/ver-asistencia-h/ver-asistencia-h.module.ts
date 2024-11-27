import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAsistenciaHPageRoutingModule } from './ver-asistencia-h-routing.module';

import { VerAsistenciaHPage } from './ver-asistencia-h.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAsistenciaHPageRoutingModule
  ],
  declarations: [VerAsistenciaHPage]
})
export class VerAsistenciaHPageModule {}
