import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { WorkReport } from '../interfaces/work-report.interface';

import { WORK_REPORTS } from '../mocks/work-reports.mock';

@Injectable({
  providedIn: 'root'
})
export class WorkReportService {

  constructor() { }

  getWorkReports(): Observable<WorkReport[]> {
    return of(WORK_REPORTS);
  }
}
