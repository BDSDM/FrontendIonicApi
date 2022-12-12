import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppIDPage } from './app-id.page';

const routes: Routes = [
  {
    path: '',
    component: AppIDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppIDPageRoutingModule {}
