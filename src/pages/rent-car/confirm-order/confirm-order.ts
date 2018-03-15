import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfirmOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-order',
  templateUrl: 'confirm-order.html',
})
export class ConfirmOrderPage {
  threeParty:boolean = true;//第三方责任险
  extraService:boolean = true;//网点额外服务
  readAgreeFlg:boolean = true;//是否阅读flg
  vipServiceFlg:boolean = true;//尊享服务费
  specifyCarFlg:boolean = true;//指定车型
  threeParty1:number = 1;

  cardetailArr:string[]=[ '订车流程','必备材料' ,'租车须知','注意事项'];
  cardetailSeg:string=this.cardetailArr[1];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmOrderPage');
  }

  segmentChanged(event){}



}
