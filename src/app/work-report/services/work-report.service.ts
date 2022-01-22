import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { WorkReport } from '../interfaces/work-report.interface';

import { WORK_REPORTS } from '../mocks/work-reports.mock';

@Injectable({
  providedIn: 'root'
})
export class WorkReportService {

  constructor() { }

  // GET: one record by id
  getWorkReportById(id: number): Observable<WorkReport> {
    const indexOfWorkReport: number = WORK_REPORTS.findIndex(e => {return e.id == id });  
    const workReport: WorkReport = WORK_REPORTS[indexOfWorkReport];

    return of(workReport);
  }

  // GET: all records
  getWorkReports(): Observable<WorkReport[]> {
    return of(WORK_REPORTS);
  }

  // POST: create a new record
  addWorkReport(workReport: WorkReport): Observable<WorkReport> {
    WORK_REPORTS.push(workReport);

    return of(workReport);
  }

  // POST: add or update a record
  addOrUpdateWorkReport(workReport: WorkReport): Observable<WorkReport> {
    this.getWorkReportById(workReport.id)
      .subscribe(wr => {
        // update
        if (wr != null) {
          const indexOfWorkReport: number = WORK_REPORTS.findIndex(e => {return e.id == wr.id });
          WORK_REPORTS[indexOfWorkReport] = workReport;
        }
        // add
        else {
          WORK_REPORTS.push(workReport);
        }
      });
    return of(workReport);
  }

  // PUT: update a new record
  updateWorkReport(workReport: WorkReport): Observable<WorkReport> {
    return of(workReport);
  }

  // DELETE: delete a record
  deleteWorkRport(workReport: WorkReport): Observable<WorkReport> {
    const indexOfWorkReport = WORK_REPORTS.indexOf(workReport);
    const workReportDeleted = WORK_REPORTS[indexOfWorkReport];
    WORK_REPORTS.splice(indexOfWorkReport, 1);

    return of(workReportDeleted);
  }
}
