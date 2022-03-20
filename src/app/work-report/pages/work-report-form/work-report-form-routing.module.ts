import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkReportFormPage } from './work-report-form.page';

const routes: Routes = [
  {
    path: '',
    component: WorkReportFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkReportFormPageRoutingModule {}
