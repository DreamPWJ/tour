import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverAddPage } from './driver-add';

@NgModule({
  declarations: [
    DriverAddPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverAddPage),
  ],
})
export class DriverAddPageModule {}
