import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { WorkReport } from '../interfaces/work-report.interface';

import { WORK_REPORTS } from '../mocks/work-reports.mock';

@Injectable({
  providedIn: 'root'
})
export class WorkReportService {

  constructor() { }

  // GET: all records
  getWorkReports(): Observable<WorkReport[]> {
    return of(WORK_REPORTS);
  }

  // POST: create a new record
  addWorkReport(workReport: WorkReport): Observable<WorkReport> {
    return of(workReport);
  }

  // DELETE: delete a new record
  deleteWorkRport(workReport: WorkReport): Observable<WorkReport> {
    const indexOfWorkReport = WORK_REPORTS.indexOf(workReport);
    const workReportDeleted = WORK_REPORTS[indexOfWorkReport];
    WORK_REPORTS.splice(indexOfWorkReport, 1);

    return of(workReportDeleted);
  }
}
