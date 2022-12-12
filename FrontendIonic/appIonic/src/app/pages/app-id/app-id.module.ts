import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppIDPageRoutingModule } from './app-id-routing.module';

import { AppIDPage } from './app-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppIDPageRoutingModule
  ],
  declarations: [AppIDPage]
})
export class AppIDPageModule {}
