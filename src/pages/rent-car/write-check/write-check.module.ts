import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WriteCheckPage } from './write-check';

@NgModule({
  declarations: [
    WriteCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(WriteCheckPage),
  ],
})
export class WriteCheckPageModule {}
