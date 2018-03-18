import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DebusSelectPage } from './debus-select';

@NgModule({
  declarations: [
    DebusSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(DebusSelectPage),
  ],
})
export class DebusSelectPageModule {}
