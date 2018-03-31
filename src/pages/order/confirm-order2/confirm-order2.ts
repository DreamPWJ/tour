import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AppService} from "../../../providers/util/app.service";

/**
 * Generated class for the ConfirmOrder2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-order2',
  templateUrl: 'confirm-order2.html',
})
export class ConfirmOrder2Page {
  baseFlg:boolean = true;//基础保险费
  threeParty:boolean = true;//第三方责任险
  superCar:boolean = true;//超级全车驾乘险
  threeParty1:number = 1;
  superCar1:number = 1;
  superFold:boolean = false; //向下的icon

  personList = [
    {index:1,name:'全选',check:true},
    {index:2,name:'余小薇',check:true},
    {index:3,name:'王天一',check:true},
    {index:4,name:'王天尔',check:true},
    {index:5,name:'王天三',check:true},
  ];

  checkNum:number = 0;
  readAgreeFlg:boolean = true;

  confirmArr:string[]=[ '购买流程','必备材料' ,'预定须知','重要条款'];
  confirmSeg:string=this.confirmArr[1];

  constructor(public navCtrl: NavController,public appService: AppService,public alerCtrl:AlertController) {

  }

  ngDoCheck(){
    let i = 0;
    this.personList.map((item => {
      if(item.index == 1&& item.check){

      }
      if (item.check) {
        item.index != 1 ? i++ : i;
        this.checkNum = i;
      }
    }))
  }

  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewWillEnter(){
    this.appService.loadingHide();
  }

  segmentChanged(event){}

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
