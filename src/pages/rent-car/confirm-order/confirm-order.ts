import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public appService: AppService,
              public alerCtrl: AlertController, public modalCtrl: ModalController) {
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

  doAlert() {
    let alert = this.alerCtrl.create({
      cssClass:'doAlert',
      title: '网点额外服务说明',
      message: `<p class="div-border "></p><p class="color-blue">GPS导航仪</p><p>租车门店提供的GPS导航仪通常为当地语言版本，价格和库存取决于门店</p>
        <p class="color-blue">儿童座椅</p><p>汽车上的安全带是按成人标准来设计的，如果给儿童使用，安全带会卡在儿童的脖子上，发生事故对儿童的伤害更大。体重低于36KG或身高低于145CM的儿童必须使用安全座椅。座椅包括婴儿座椅、儿童座椅、儿童增高坐垫，语言版本，价格和库存取决于门店租车公司。</p>
        <p class="color-dark">温馨提示</p><p>1.额外服务费用需另行支付</p><p>2.总费用=日单价×租用天数，当租期较长时一般会有封顶价格(约70~90元)，具体价格以各门店为准。</p>`,
      buttons: ['关闭']
    });
    alert.present()
  }

}
