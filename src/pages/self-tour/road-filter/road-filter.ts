import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the RoadFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-road-filter',
  templateUrl: 'road-filter.html',
})
export class RoadFilterPage {
  contrast: number = 3;
  jingdianSel: number = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
  }


  //关闭
  dismiss() {
    this.viewCtrl.dismiss();
  }

  dayList = [
    {day:'3天以下'},
    {day:'3~5天'},
    {day:'6~9天'},
    {day:'10~15天'},
    {day:'16~20天'},
    {day:'20天以上'},
  ];
  jingdianList = [
    {id:1,name:'布达拉宫'},
    {id:2,name:'新都桥'},
    {id:3,name:'鲁朗林海'},
    {id:4,name:'南迦巴瓦峰'},
    {id:5,name:'尼洋河'},
    {id:6,name:'珠峰大本营'},
  ]

  jingdianSelect(id){
    this.jingdianSel = id;
  }
}
