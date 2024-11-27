import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAsistenciaLPageRoutingModule } from './ver-asistencia-l-routing.module';

import { VerAsistenciaLPage } from './ver-asistencia-l.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAsistenciaLPageRoutingModule
  ],
  declarations: [VerAsistenciaLPage]
})
export class VerAsistenciaLPageModule {}
