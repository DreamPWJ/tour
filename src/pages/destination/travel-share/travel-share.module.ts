import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelSharePage } from './travel-share';

@NgModule({
  declarations: [
    TravelSharePage,
  ],
  imports: [
    IonicPageModule.forChild(TravelSharePage),
  ],
})
export class TravelSharePageModule {}
