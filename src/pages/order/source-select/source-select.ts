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
  carNum:number = 1;//车数量
  driverNum:number = 1;//司机数量
  guideNum:number = 0;//导游数量
  cameraNum:number = 0;//摄影师数量
  ertongNum:number = 0;//儿童数量
  yingerNum:number = 0;//婴儿数量
  zenggaoNum:number = 0;//儿童增高坐垫数量
  hotelNum:number = 0;//酒店数量
  niyangNum:number = 0;//尼洋河数量
  yaluNum:number = 0;//雅鲁藏布大峡谷数量

  guideFlg:boolean = true;//导游flg
  yingerFlg:boolean = true;//婴儿flg

  constructor(public navCtrl: NavController,public appService: AppService) {
  }

  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewWillEnter(){
    this.appService.loadingHide();
  }

}
