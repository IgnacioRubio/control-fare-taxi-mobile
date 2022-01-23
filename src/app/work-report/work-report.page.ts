import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router,
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

  // NAVIGATION

  goToWorkReportForm(id: number): void {
    this.router.navigate(['/work-report/work-report-form', id]);
  }

  goToWorkReportFare(id: number): void {
    this.router.navigate(['/work-report', id, 'fare']);
  }

  // LIST MULTISELECT EVENTS

  onClickWorkReport(workReport: WorkReport): void {
    this.goToWorkReportFare(workReport.id);
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
    this.goToWorkReportForm(workReport.id);
  }

  onShareWorkReports(workReports: WorkReport[]): void {
    console.log(workReports)
  }
}
