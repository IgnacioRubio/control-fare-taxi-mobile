import { Component, OnInit } from '@angular/core';


import { WorkReport } from '@work-report/interfaces/work-report.interface';
import { WorkReportService } from '@work-report/services/work-report.service';

@Component({
  selector: 'app-work-report',
  templateUrl: './work-report.page.html',
  styleUrls: ['./work-report.page.scss'],
})
export class WorkReportPage implements OnInit {
  workReports: WorkReport[] = [];
  workReportsSelected: WorkReport[] = [];
  workReportsAttributesToShow = ['description', 'kilometres', 'isSend'];

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

  // LIST MULTISELECT EVENTS
  onClickWork(event: WorkReport): void {
    console.log(event)
  }
}
