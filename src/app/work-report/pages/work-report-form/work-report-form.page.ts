import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  workReportId: string;
  
  workReport: WorkReport = {
    id: `wr${new Date().getTime().toString()}`,
    description: moment().format("D-MMM-YYYY").toLowerCase(),
    kilometers: 0,
    isSend: false,
    createAt: new Date()
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private workReportService: WorkReportService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.initReport();
  }

  async initReport(): Promise<void> {
    const id: string = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.workReport = await this.workReportService.getWorkReportById(id);
    }
  }

  async onSave(): Promise<void> {
    try {
      await this.workReportService.addOrUpdateWorkReport(this.workReport);

      this.toastService.addSuccess();
      this.router.navigate(['/', 'work-report']);
    } catch (e) {
      this.toastService.addFailed();
    }
  }

  getParams(): void {
    const workReportId = this.route.snapshot.paramMap.get('id');

    this.workReportId = workReportId;
  }
}
