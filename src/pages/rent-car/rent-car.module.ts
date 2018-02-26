import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentCarPage } from './rent-car';

@NgModule({
  declarations: [
    RentCarPage,
  ],
  imports: [
    IonicPageModule.forChild(RentCarPage),
  ],
})
export class RentCarPageModule {}
