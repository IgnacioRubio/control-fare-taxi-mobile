import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarePage } from './fare.page';

const routes: Routes = [
  {
    path: '',
    component: FarePage
  },
  {
    path: 'fare-form',
    loadChildren: () => import('./pages/fare-form/fare-form.module').then( m => m.FareFormPageModule)
  },
  {
    path: 'fare-form/:id',
    loadChildren: () => import('./pages/fare-form/fare-form.module').then( m => m.FareFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarePageRoutingModule {}
