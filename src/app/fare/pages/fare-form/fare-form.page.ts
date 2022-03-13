import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  fareId: string;
  workReportId: string;

  fare: Fare;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fareService: FareService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.getParams();
    this.initFare();
  }

  async initFare(): Promise<void> {

    // search for fare
    if (this.fareId) {
      this.fare = await this.fareService.getOneFare(this.fareId, this.workReportId);
    }
    // create new fare
    else {
      this.fare = {
        id: `fa${new Date().getTime().toString()}`,
        origin: '',
        destination: '',
        price: 0,
        isPayCard: false,
        isSespaService: false,
        workReportId: this.workReportId,
        createAt: new Date()
      };
    }
  }

  async onSave(): Promise<void> {
    try {
      await this.fareService.addOrUpdateFare(this.fare);

      this.toastService.addSuccess();
      this.router.navigate(['/', 'work-report', this.workReportId, 'fare']);
    } catch (e) {
      this.toastService.addFailed();
    }
  }

  getParams(): void {
    const fareId = this.route.snapshot.paramMap.get('id');
    const workReportId = this.route.snapshot.paramMap.get('workReportId');

    this.fareId = fareId;
    this.workReportId = workReportId;
  }
}
