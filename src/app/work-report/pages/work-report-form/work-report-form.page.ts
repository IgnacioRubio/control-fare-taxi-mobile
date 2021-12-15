import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-report-form',
  templateUrl: './work-report-form.page.html',
  styleUrls: ['./work-report-form.page.scss'],
})
export class WorkReportFormPage implements OnInit {
  description = '3-dic-2021';
  kilometers = 0;
  isSend = false;

  constructor() { }

  ngOnInit() {
  }

}
