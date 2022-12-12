import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'app-i',
    pathMatch: 'full'
  },
  {
    path: 'app-i',
    loadChildren: () => import('./pages/app-i/app-i.module').then( m => m.AppIPageModule)
  },
  {
    path: 'app-id',
    loadChildren: () => import('./pages/app-id/app-id.module').then( m => m.AppIDPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
