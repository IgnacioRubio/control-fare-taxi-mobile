import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkReportPage } from './work-report.page';

const routes: Routes = [
  {
    path: '',
    component: WorkReportPage
  },
  {
    path: 'work-report-form',
    loadChildren: () => import('./pages/work-report-form/work-report-form.module').then( m => m.WorkReportFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkReportPageRoutingModule {}
