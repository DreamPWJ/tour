import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CircleCarpoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-circle-carpool',
  templateUrl: 'circle-carpool.html',
})
export class CircleCarpoolPage {

  carpoolArr:string[]=[ '聊天','去拼车'];
  carpool:string=this.carpoolArr[1];

  carpoolList = [
    {index:1,name:'陈晓卿',img:'assets/imgs/self-tour/termini6.png',person:2,title:'【最美林芝2日】桃花季预售·雅鲁藏布大峡谷·嘎啦桃花村/拉如桃花村',
    price:16999,perprice:2125},
    {index:2,name:'tinatina',img:'assets/imgs/self-tour/termini7.png',person:1,title:'【最美林芝2日】桃花季预售·雅鲁藏布大峡谷·嘎啦桃花村/拉如桃花村',
      price:16999,perprice:2122},
    {index:3,name:'niaje',img:'assets/imgs/self-tour/termini5.png',person:2,title:'【最美林芝2日】桃花季预售·雅鲁藏布大峡谷·嘎啦桃花村/拉如桃花村',
      price:20000,perprice:2353},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  segmentChanged(event){
  }

  swipeEvent(event) {
    //向左滑
    if (event.direction == 2) {
      if (this.carpoolArr.indexOf(this.carpool) < 1) {
        this.carpool = this.carpoolArr[this.carpoolArr.indexOf(this.carpool) + 1];
      }
    }
    //向右滑
    if (event.direction == 4) {
      if (this.carpoolArr.indexOf(this.carpool) > 0) {
        this.carpool = this.carpoolArr[this.carpoolArr.indexOf(this.carpool) - 1];
      }
    }
  }


}
