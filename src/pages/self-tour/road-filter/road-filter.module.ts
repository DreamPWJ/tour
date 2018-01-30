import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoadFilterPage } from './road-filter';

@NgModule({
  declarations: [
    RoadFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(RoadFilterPage),
  ],
})
export class RoadFilterPageModule {}
