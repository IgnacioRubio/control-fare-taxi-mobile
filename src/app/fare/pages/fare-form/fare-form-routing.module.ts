import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FareFormPage } from './fare-form.page';

const routes: Routes = [
  {
    path: '',
    component: FareFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FareFormPageRoutingModule {}
