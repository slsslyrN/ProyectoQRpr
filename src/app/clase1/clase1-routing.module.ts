import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Clase1Page } from './clase1.page';

const routes: Routes = [
  {
    path: '',
    component: Clase1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Clase1PageRoutingModule {}
