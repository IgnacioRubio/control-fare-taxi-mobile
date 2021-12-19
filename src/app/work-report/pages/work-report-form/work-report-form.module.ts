import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkReportFormPageRoutingModule } from './work-report-form-routing.module';

import { WorkReportFormPage } from './work-report-form.page';

import { ToolbarBackComponent } from '@shared/components/toolbar-back/toolbar-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkReportFormPageRoutingModule
  ],
  declarations: [
    WorkReportFormPage,
    ToolbarBackComponent
  ]
})
export class WorkReportFormPageModule {}
