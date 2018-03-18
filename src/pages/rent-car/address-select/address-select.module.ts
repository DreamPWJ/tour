import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressSelectPage } from './address-select';

@NgModule({
  declarations: [
    AddressSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressSelectPage),
  ],
})
export class AddressSelectPageModule {}
