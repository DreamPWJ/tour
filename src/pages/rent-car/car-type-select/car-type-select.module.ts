import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarTypeSelectPage } from './car-type-select';

@NgModule({
  declarations: [
    CarTypeSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(CarTypeSelectPage),
  ],
})
export class CarTypeSelectPageModule {}
