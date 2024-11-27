import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerAsistenciaMPage } from './ver-asistencia-m.page';

const routes: Routes = [
  {
    path: '',
    component: VerAsistenciaMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerAsistenciaMPageRoutingModule {}
