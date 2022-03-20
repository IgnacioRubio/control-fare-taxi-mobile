import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarePageRoutingModule } from './fare-routing.module';

import { FareListComponent } from './components/fare-list/fare-list.component';

import { FarePage } from './fare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarePageRoutingModule
  ],
  declarations: [
    FarePage,
    FareListComponent
  ]
})
export class FarePageModule {}
