import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfnewpassPage } from './confnewpass.page';

const routes: Routes = [
  {
    path: '',
    component: ConfnewpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfnewpassPageRoutingModule {}
