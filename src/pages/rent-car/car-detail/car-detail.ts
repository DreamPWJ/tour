import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-detail',
  templateUrl: 'car-detail.html',
})
export class CarDetailPage {
  cardetailArr:string[]=[ '订车流程','必备材料' ,'租车须知','注意事项'];
  cardetailSeg:string=this.cardetailArr[1];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  segmentChanged(event){}

}
