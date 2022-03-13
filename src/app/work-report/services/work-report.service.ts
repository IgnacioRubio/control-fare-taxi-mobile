import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { KvStorageService } from '@shared/services/kv-storage.service';

import { WorkReport } from '../interfaces/work-report.interface';

import { WORK_REPORTS } from '../mocks/work-reports.mock';

const WORK_REPORT_IDS: string = "workReportIds";

@Injectable({
  providedIn: 'root'
})
export class WorkReportService {
  

  constructor(
    private kvstorage: KvStorageService
  ) { }

  // GET: one record by id
  async getWorkReportById(id: string): Promise<WorkReport> {
    const workReport = await this.kvstorage.get(id);

    return workReport;
  }

  // GET: all records
  async getWorkReports(): Promise<WorkReport[]> {
    const workReportIds: string[] = await this.kvstorage.get(WORK_REPORT_IDS);
    const workReports: WorkReport[] = [];

    for await (let id of workReportIds) {
      const workReport = await this.getWorkReportById(id);

      if (workReport) workReports.push(workReport);
    }
    
    return workReports;
  }

  // INSERT: create a new record
  async addWorkReport(workReport: WorkReport): Promise<WorkReport> {
    // insert id into WORK_REPORT_IDS
    await this.kvstorage.unshift(WORK_REPORT_IDS, workReport.id);
    // add new record
    await this.kvstorage.set(workReport.id, workReport);

    return workReport;
  }

  // UPDATE: update a new record
  async updateWorkReport(workReport: WorkReport): Promise<WorkReport> {
    await this.kvstorage.set(workReport.id, workReport);
    
    return workReport;
  }

  // INSERT/UPDATE: add or update a record
  async addOrUpdateWorkReport(workReport: WorkReport): Promise<WorkReport> {
    const workReportSearch = await this.getWorkReportById(workReport.id);

    // update
    if (workReportSearch) {
      await this.updateWorkReport(workReport);
    }
    // add
    else {
     await this.addWorkReport(workReport);
    }
    
    return workReport;
  }

  // DELETE: delete a record
  async deleteWorkRport(workReport: WorkReport): Promise<WorkReport> {
    // remove id from WORK_REPORT_IDS
    await this.kvstorage.splice(WORK_REPORT_IDS, workReport.id);
    // remove
    await this.kvstorage.remove(workReport.id);

    return workReport;
  }
}
