import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LenguajePage } from './lenguaje.page';

const routes: Routes = [
  {
    path: '',
    component: LenguajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LenguajePageRoutingModule {}
