import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerAsistenciaHPage } from './ver-asistencia-h.page';

const routes: Routes = [
  {
    path: '',
    component: VerAsistenciaHPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerAsistenciaHPageRoutingModule {}
