import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService} from "../../../providers/util/app.service";

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
  seatYinger:number = 1;//婴儿座椅
  seatErtong:number = 1;//儿童座椅

  cardetailArr:string[]=[ '订车流程','必备材料' ,'租车须知','注意事项'];
  cardetailSeg:string=this.cardetailArr[1];

  constructor(public navCtrl: NavController, public appService: AppService) {
  }

  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewWillEnter(){
    this.appService.loadingHide();
  }

  segmentChanged(event){}

  //婴儿座椅加
  yingerPlus(){
    if(this.seatYinger < 6){
      this.seatYinger ++;
    }
  }
  //婴儿座椅减
  yingerMinus(){
    if(this.seatYinger > 0){
      this.seatYinger --;
    }
  }
  //儿童座椅加
  ertongPlus(){
    if(this.seatErtong < 6){
      this.seatErtong ++;
    }
  }
  //儿童座椅减
  ertongMinus(){
    if(this.seatErtong > 0){
      this.seatErtong --;
    }
  }
}
