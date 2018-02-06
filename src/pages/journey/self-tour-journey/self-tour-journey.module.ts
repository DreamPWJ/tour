import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelfTourJourneyPage } from './self-tour-journey';

@NgModule({
  declarations: [
    SelfTourJourneyPage,
  ],
  imports: [
    IonicPageModule.forChild(SelfTourJourneyPage),
  ],
})
export class SelfTourJourneyPageModule {}
