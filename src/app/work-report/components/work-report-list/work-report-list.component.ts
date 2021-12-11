import { Component, OnInit } from '@angular/core';

import { WorkReport } from '@work-report/interfaces/work-report.interface';
import { WorkReportService } from '@work-report/services/work-report.service';

@Component({
  selector: 'app-work-report-list',
  templateUrl: './work-report-list.component.html',
  styleUrls: ['./work-report-list.component.scss'],
})
export class WorkReportListComponent implements OnInit {
  workReports: WorkReport[];

  constructor(
    private workReportService: WorkReportService
  ) { }

  ngOnInit() {
    this.getWorkReports();
  }

  getWorkReports(): void {
    this.workReportService.getWorkReports()
      .subscribe((wr: WorkReport[]) => {
        this.workReports = wr;
      });
  }

}
