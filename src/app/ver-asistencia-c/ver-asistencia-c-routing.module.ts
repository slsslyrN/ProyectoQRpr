import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerAsistenciaCPage } from './ver-asistencia-c.page';

const routes: Routes = [
  {
    path: '',
    component: VerAsistenciaCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerAsistenciaCPageRoutingModule {}
