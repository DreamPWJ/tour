import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {BillPopover} from "./bill-popover";



@NgModule({
  declarations: [
    BillPopover,
  ],
  imports: [
    IonicPageModule.forChild(BillPopover)
  ],
})
export class BillPopoverModule {}
