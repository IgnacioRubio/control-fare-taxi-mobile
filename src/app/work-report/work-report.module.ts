import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkReportPageRoutingModule } from './work-report-routing.module';

import { WorkReportPage } from './work-report.page';
import { WorkReportListComponent } from './components/work-report-list/work-report-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkReportPageRoutingModule
  ],
  declarations: [
    WorkReportPage,
    WorkReportListComponent
  ]
})
export class WorkReportPageModule {}
