import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoadDetailPage } from './road-detail';

@NgModule({
  declarations: [
    RoadDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RoadDetailPage),
  ],
})
export class RoadDetailPageModule {}
