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
}
