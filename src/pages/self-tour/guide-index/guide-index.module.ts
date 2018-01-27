import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuideIndexPage } from './guide-index';

@NgModule({
  declarations: [
    GuideIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(GuideIndexPage),
  ],
})
export class GuideIndexPageModule {}
