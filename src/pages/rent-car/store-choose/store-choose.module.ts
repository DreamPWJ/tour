import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreChoosePage } from './store-choose';

@NgModule({
  declarations: [
    StoreChoosePage,
  ],
  imports: [
    IonicPageModule.forChild(StoreChoosePage),
  ],
})
export class StoreChoosePageModule {}
