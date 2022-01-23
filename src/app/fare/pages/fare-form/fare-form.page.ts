import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Fare } from '@fare/interfaces/fare.interface';
import { FareService } from '@fare/services/fare.service';

import { ToastService } from '@shared/services/toast.service';

@Component({
  selector: 'app-fare-form',
  templateUrl: './fare-form.page.html',
  styleUrls: ['./fare-form.page.scss'],
})
export class FareFormPage implements OnInit {
  titleToolbar: string = "Formulario Carreras";

  fare: Fare = {
    origin: '',
    destination: '',
    price: 0,
    isPayCard: false,
    isSespaService: false,
    workReportId: null,
    createAt: new Date()
  };

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private fareService: FareService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.getFare();
  }

  getFare(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.fareService.getFareById(Number(id))
        .subscribe(fare => {
          if (fare) {
            this.fare = fare;
          }
        });
    }
  }

  onSave(): void {
    this.fareService.addOrUpdateFare(this.fare)
      .subscribe(
      () => {
        this.toastService.addSuccess();
        this.location.back();
      }, 
      // error
      () => {
        this.toastService.addFailed();
      });
  }
}
