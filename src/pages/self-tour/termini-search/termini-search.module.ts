import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerminiSearchPage } from './termini-search';

@NgModule({
  declarations: [
    TerminiSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(TerminiSearchPage),
  ],
})
export class TerminiSearchPageModule {}
