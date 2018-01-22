import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoadlistPage } from './roadlist';

@NgModule({
  declarations: [
    RoadlistPage,
  ],
  imports: [
    IonicPageModule.forChild(RoadlistPage),
  ],
})
export class RoadlistPageModule {}
