import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-toolbar-back',
  templateUrl: './toolbar-back.component.html',
  styleUrls: ['./toolbar-back.component.scss'],
})
export class ToolbarBackComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
