import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FareFormPageRoutingModule } from './fare-form-routing.module';

import { FareFormPage } from './fare-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FareFormPageRoutingModule
  ],
  declarations: [
    FareFormPage
  ]
})
export class FareFormPageModule {}
