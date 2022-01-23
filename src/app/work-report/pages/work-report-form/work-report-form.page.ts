import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
  titleToolbar: string = "Formulario Parte de Trabajo";

  workReport: WorkReport = {
    description: moment().format("D-MMM-YYYY").toLowerCase(),
    kilometers: 0,
    isSend: false,
    createAt: new Date()
  };

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private workReportService: WorkReportService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.getWorkReport();
  }

  getWorkReport(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.workReportService.getWorkReportById(Number(id))
        .subscribe(wr => {
          if (wr) {
            this.workReport = wr;
          }
        });
    }
  }

  onSave(): void {
    this.workReportService.addOrUpdateWorkReport(this.workReport)
      .subscribe(
      () => {
        this.toastService.addSuccess();
        this.location.back();
      }, 
      // error
      () => {
        this.toastService.addFailed();
      });
  }
}
