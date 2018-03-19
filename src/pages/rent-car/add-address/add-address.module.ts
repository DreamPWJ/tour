import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAddressPage } from './add-address';
import {CityPickerModule} from "ionic2-city-picker";

@NgModule({
  declarations: [
    AddAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAddressPage),CityPickerModule,
  ],
})
export class AddAddressPageModule {}
