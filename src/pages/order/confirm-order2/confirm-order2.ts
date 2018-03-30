import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  superFold:boolean = true; //向下的icon

  personList = [
    {index:1,name:'全选',check:true},
    {index:2,name:'余小薇',check:true},
    {index:3,name:'王天一',check:true},
    {index:4,name:'王天尔',check:true},
    {index:5,name:'王天三',check:true},
  ];

  checkNum:number = this.personList.length - 1;

  confirmArr:string[]=[ '购买流程','必备材料' ,'预定须知','重要条款'];
  confirmSeg:string=this.confirmArr[1];

  constructor(public navCtrl: NavController,public appService: AppService) {
  }

  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewWillEnter(){
    this.appService.loadingHide();
  }

  segmentChanged(event){}


}
