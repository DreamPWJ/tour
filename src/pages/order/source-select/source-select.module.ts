import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SourceSelectPage } from './source-select';

@NgModule({
  declarations: [
    SourceSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(SourceSelectPage),
  ],
})
export class SourceSelectPageModule {}
