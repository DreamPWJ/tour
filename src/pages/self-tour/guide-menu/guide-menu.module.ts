import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuideMenuPage } from './guide-menu';

@NgModule({
  declarations: [
    GuideMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(GuideMenuPage),
  ],
})
export class GuideMenuPageModule {}
