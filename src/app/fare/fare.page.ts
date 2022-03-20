import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

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
    // navigation ends
    this.router.events.subscribe(navigation => {
      if (navigation instanceof NavigationEnd){
        // refresh list and checkeds
        this.getFares();
      }
    });    
  }

  async getFares(): Promise<void> {
    const workReportId: string = this.route.snapshot.paramMap.get('workReportId');

    this.fares = await this.fareService.getFaresByWorkReportId(workReportId);
  }

  // NAVIGATION

  goToFareForm(id: string): void {
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
      await this.fareService.deleteFare(fare);
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
