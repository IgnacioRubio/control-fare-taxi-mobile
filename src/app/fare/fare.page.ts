import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Fare } from './interfaces/fare.interface';
import { FareService } from './services/fare.service';

@Component({
  selector: 'app-fare',
  templateUrl: './fare.page.html',
  styleUrls: ['./fare.page.scss'],
})
export class FarePage implements OnInit {
  fareFormRoute: string = this.router.url + '/fare-form';

  titleToolbar: string = "Carreras";

  fares: Fare[];
  faresSelected: Fare[] = [];

  constructor(
    private router: Router,
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

  // NAVIGATION

  goToFareForm(id: number): void {
    this.router.navigate([this.router.url, 'fare-form', id]);
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

  onEditFare(fare: Fare): void {
    this.goToFareForm(fare.id);
  }

  onShareFares(fares: Fare[]): void {
    console.log(fares)
  }

}
