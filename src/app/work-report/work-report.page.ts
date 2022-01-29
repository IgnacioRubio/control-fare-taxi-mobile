import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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
    // navigation ends
    this.router.events.subscribe(navigation => {
      if (navigation instanceof NavigationEnd){
        // refresh list and checkeds
        this.getWorkReports();
      }
    });
  }

  async getWorkReports(): Promise<void> {
    this.workReports = await this.workReportService.getWorkReports();
  }

  // NAVIGATION

  goToWorkReportForm(id: string): void {
    this.router.navigate(['/work-report/work-report-form', id]);
  }

  goToWorkReportFare(id: string): void {
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
      await this.workReportService.deleteWorkRport(workReport);
    }

    await this.getWorkReports();
  }

  onEditWorkReport(workReport: WorkReport): void {
    this.goToWorkReportForm(workReport.id);
  }

  onShareWorkReports(workReports: WorkReport[]): void {
    console.log(workReports)
  }
}
