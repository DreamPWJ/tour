import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarTypeFilterPage } from './car-type-filter';

@NgModule({
  declarations: [
    CarTypeFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(CarTypeFilterPage),
  ],
})
export class CarTypeFilterPageModule {}
