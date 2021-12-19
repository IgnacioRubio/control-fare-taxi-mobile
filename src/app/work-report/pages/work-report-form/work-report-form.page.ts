import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { WorkReport } from '@work-report/interfaces/work-report.interface';
import { WorkReportService } from '@work-report/services/work-report.service';

import { ToastService } from '@shared/services/toast.service';

moment.locale('es');

@Component({
  selector: 'app-work-report-form',
  templateUrl: './work-report-form.page.html',
  styleUrls: ['./work-report-form.page.scss'],
})
export class WorkReportFormPage implements OnInit {
  description = moment().format("D-MMM-YYYY").toLowerCase();
  kilometers = 0;
  isSend = false;

  constructor(
    private router: Router,
    private workReportService: WorkReportService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    
  }

  onSave(): void {
    const workReport: WorkReport = {
      description: this.description,
      kilometres: this.kilometers,
      isSend: this.isSend,
      createAt: new Date()
    };

    this.workReportService.addWorkReport(workReport)
      .subscribe(
      () => {
        this.toastService.addSuccess();
        this.router.navigate(['/']);
      }, 
      // error
      () => {
        this.toastService.addFailed();
      });
  }
}
