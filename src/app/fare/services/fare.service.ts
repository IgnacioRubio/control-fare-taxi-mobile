import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Fare } from '@fare/interfaces/fare.interface';

import { FARES } from '@fare/mocks/fares.mock';

@Injectable({
  providedIn: 'root'
})
export class FareService {

  constructor() { }

  // GET: records by association
  getFaresByWorkReportId(workReportId: number): Observable<Fare[]> {
    const fares: Fare[] = FARES.filter((fare: Fare) => {
      return fare.workReportId == workReportId;
    });

    return of(fares);
  }

  // DELETE: delete a record
  deleteFare(fare: Fare): Observable<Fare> {
    const indexOfFare = FARES.indexOf(fare);
    const fareDeleted = FARES[indexOfFare];
    FARES.splice(indexOfFare, 1);

    return of(fareDeleted);
  }
}
