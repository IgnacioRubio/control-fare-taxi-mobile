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

  onClickWorkReport(workReport: WorkReport): void {
    console.log(workReport)
  }

  onSelectedWorkReports(workReports: WorkReport[]): void {
    console.log(workReports)
    this.workReportsSelected = workReports;
  }

  async onDeleteWorkReports(workReports: WorkReport[]): Promise<void> {
    for await(let workReport of workReports) {
      this.workReportService.deleteWorkRport(workReport)
        .subscribe(wr => console.log(wr))
    }
  }

  onEditWorkReport(workReport: WorkReport): void {
    console.log(workReport)
  }

  onShareWorkReports(workReports: WorkReport[]): void {
    console.log(workReports)
  }
}
