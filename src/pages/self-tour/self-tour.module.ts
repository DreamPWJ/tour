import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelfTourPage } from './self-tour';

@NgModule({
  declarations: [
    SelfTourPage,
  ],
  imports: [
    IonicPageModule.forChild(SelfTourPage),
  ],
})
export class SelfTourPageModule {}
