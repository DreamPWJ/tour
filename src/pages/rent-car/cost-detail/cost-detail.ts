import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the CostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cost-detail',
  templateUrl: 'cost-detail.html',
})
export class CostDetailPage {

  constructor(public navCtrl: NavController, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CostDetailPage');
  }

  //关闭
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
