import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Fare } from '@fare/interfaces/fare.interface';

import { FARES } from '@fare/mocks/fares.mock';

@Injectable({
  providedIn: 'root'
})
export class FareService {

  constructor() { }

  // GET: one record by id
  getFareById(id: number): Observable<Fare> {
    const indexOfFare: number = FARES.findIndex(e => {return e.id == id });  
    const fare: Fare = FARES[indexOfFare];

    return of(fare);
  }

  // GET: records by association
  getFaresByWorkReportId(workReportId: number): Observable<Fare[]> {
    const fares: Fare[] = FARES.filter((fare: Fare) => {
      return fare.workReportId == workReportId;
    });

    return of(fares);
  }

  // POST: create a new record
  addFare(fare: Fare): Observable<Fare> {
    FARES.push(fare);

    return of(fare);
  }

  // POST: add or update a record
  addOrUpdateFare(fare: Fare): Observable<Fare> {
    this.getFareById(fare.id)
      .subscribe(far => {
        // update
        if (far != null) {
          const indexOfFare: number = FARES.findIndex(e => {return e.id == far.id });
          FARES[indexOfFare] = fare;
        }
        // add
        else {
          FARES.push(fare);
        }
      });
    return of(fare);
  }

  // PUT: update a new record
  updateFare(fare: Fare): Observable<Fare> {
    return of(fare);
  }

  // DELETE: delete a record
  deleteFare(fare: Fare): Observable<Fare> {
    const indexOfFare = FARES.indexOf(fare);
    const fareDeleted = FARES[indexOfFare];
    FARES.splice(indexOfFare, 1);

    return of(fareDeleted);
  }
}
