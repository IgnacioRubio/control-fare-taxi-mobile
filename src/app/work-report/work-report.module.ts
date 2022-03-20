import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkReportListComponent } from './components/work-report-list/work-report-list.component';
import { WorkReportFormPageModule } from './pages/work-report-form/work-report-form.module';

import { WorkReportPageRoutingModule } from './work-report-routing.module';

import { WorkReportPage } from './work-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkReportPageRoutingModule,
    WorkReportFormPageModule
  ],
  declarations: [
    WorkReportListComponent,
    WorkReportPage,
  ]
})
export class WorkReportPageModule {}
