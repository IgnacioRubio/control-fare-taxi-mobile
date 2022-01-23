import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WorkReportFormPageRoutingModule } from './work-report-form-routing.module';

import { WorkReportFormPage } from './work-report-form.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkReportFormPageRoutingModule
  ],
  declarations: [
    WorkReportFormPage
  ]
})
export class WorkReportFormPageModule {}
