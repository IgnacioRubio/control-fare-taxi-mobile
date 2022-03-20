import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { KvStorageService } from '@shared/services/kv-storage.service';

import { Fare } from '@fare/interfaces/fare.interface';

import { FARES } from '@fare/mocks/fares.mock';

@Injectable({
  providedIn: 'root'
})
export class FareService {

  constructor(
    private kvstorage: KvStorageService
  ) { }

  // GET: one record by id + association id
  async getOneFare(id: string, workReportId: string): Promise<Fare> {
    // get fares
    const fares = await this.getFaresByWorkReportId(workReportId);

    if (fares == null || fares.length == 0) return;

    // look for index
    const index: number = fares.findIndex(e => {return e.id == id });  
    const fare: Fare = fares[index];

    return fare;
  }

  // GET: records by association
  async getFaresByWorkReportId(workReportId: string): Promise<Fare[]> {
    const fares: Fare[] = await this.kvstorage.get(this.getFaresKey(workReportId));

    return fares;
  }

  // INSERT: create a new record
  async addFare(fare: Fare): Promise<Fare> {
    await this.kvstorage.push(this.getFaresKey(fare.workReportId), fare);

    return fare;
  }

  // UPDATE: update a new record
  async updateFare(fare: Fare): Promise<Fare> {
    // get fares
    const fares = await this.getFaresByWorkReportId(fare.workReportId);

    if (fares == null || fares.length == 0) return;

    // look for index
    const index: number = fares.findIndex(e => {return e.id == fare.id });  
    // update fare
    fares[index] = fare;
    // update fares
    await this.kvstorage.set(fare.workReportId, fares);

    return fare;
  }

  // INSERT/UPDATE: add or update a record
  async addOrUpdateFare(fare: Fare): Promise<Fare> {
    const fareSearch = await this.getOneFare(fare.id, fare.workReportId);

    // update
    if (fareSearch) await this.updateFare(fare);
    // add
    else await this.addFare(fare);

    return fare;
  }  

  // DELETE: delete a record
  async deleteFare(fare: Fare): Promise<Fare> {
    // get fares
    const fares = await this.getFaresByWorkReportId(this.getFaresKey(fare.workReportId));

    if (fares == null || fares.length == 0) return;

    // filter fare with delete fare
    const faresDelete: Fare[] = fares.filter(e => {return e.id == fare.id });
    // update fares
    await this.kvstorage.set(this.getFaresKey(fare.workReportId), faresDelete);

    return fare;
  }

  private getFaresKey(workReportId: string): string {
    return `${workReportId}[]`;
  }
}
