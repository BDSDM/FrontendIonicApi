import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppIPage } from './app-i.page';

const routes: Routes = [
  {
    path: '',
    component: AppIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppIPageRoutingModule {}
