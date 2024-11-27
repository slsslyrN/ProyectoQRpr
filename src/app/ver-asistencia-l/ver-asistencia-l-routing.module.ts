import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerAsistenciaLPage } from './ver-asistencia-l.page';

const routes: Routes = [
  {
    path: '',
    component: VerAsistenciaLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerAsistenciaLPageRoutingModule {}
