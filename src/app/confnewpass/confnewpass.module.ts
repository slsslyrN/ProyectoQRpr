import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { ConfnewpassPageRoutingModule } from './confnewpass-routing.module';

import { ConfnewpassPage } from './confnewpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfnewpassPageRoutingModule
  ],
  declarations: [ConfnewpassPage]
})
export class ConfnewpassPageModule {}
