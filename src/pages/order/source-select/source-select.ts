import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {AppService} from "../../../providers/util/app.service";

/**
 * Generated class for the SourceSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-source-select',
  templateUrl: 'source-select.html',
})
export class SourceSelectPage {

  constructor(public navCtrl: NavController,public appService: AppService) {
  }

  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewWillEnter(){
    this.appService.loadingHide();
  }

}
