import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Fare } from './interfaces/fare.interface';
import { FareService } from './services/fare.service';

@Component({
  selector: 'app-fare',
  templateUrl: './fare.page.html',
  styleUrls: ['./fare.page.scss'],
})
export class FarePage implements OnInit {
  titleToolbar: string = "Carreras";

  fares: Fare[];
  faresSelected: Fare[] = [];

  constructor(
    private route: ActivatedRoute,
    private fareService: FareService
  ) { }

  ngOnInit() {
    this.getFares();
  }

  getFares(): void {
    const workReportId: number = Number(this.route.snapshot.paramMap.get('workReportId'));

    this.fareService.getFaresByWorkReportId(workReportId)
      .subscribe((fares: Fare[]) => this.fares = fares);
  }


  // LIST EVENTS
  onClickFare(fare: Fare): void {
    console.log(fare)
  }
  
  onSelectedFares(fares: Fare[]): void {
    this.faresSelected = fares;
  }

  async onDeleteFares(fares: Fare[]): Promise<void> {
    for await(let fare of fares) {
      this.fareService.deleteFare(fare)
        .subscribe(fare => console.log(fare))
    }

    this.getFares();
  }

}
