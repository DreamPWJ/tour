import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JourneyMapPage } from './journey-map';

@NgModule({
  declarations: [
    JourneyMapPage,
  ],
  imports: [
    IonicPageModule.forChild(JourneyMapPage),
  ],
})
export class JourneyMapPageModule {}
