import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppIPageRoutingModule } from './app-i-routing.module';

import { AppIPage } from './app-i.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppIPageRoutingModule
  ],
  declarations: [AppIPage]
})
export class AppIPageModule {}
