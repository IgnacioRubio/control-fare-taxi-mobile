import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMultiselectComponent } from '@shared/components/list-multiselect/list-multiselect.component';

import { WorkReportPageRoutingModule } from './work-report-routing.module';

import { WorkReportPage } from './work-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkReportPageRoutingModule
  ],
  declarations: [
    ListMultiselectComponent,
    WorkReportPage,
  ]
})
export class WorkReportPageModule {}
