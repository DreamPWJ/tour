import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendcarMapPage } from './sendcar-map';

@NgModule({
  declarations: [
    SendcarMapPage,
  ],
  imports: [
    IonicPageModule.forChild(SendcarMapPage),
  ],
})
export class SendcarMapPageModule {}
