import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAsistenciaCPageRoutingModule } from './ver-asistencia-c-routing.module';

import { VerAsistenciaCPage } from './ver-asistencia-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAsistenciaCPageRoutingModule
  ],
  declarations: [VerAsistenciaCPage]
})
export class VerAsistenciaCPageModule {}
