import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyCollectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-collect',
  templateUrl: 'my-collect.html',
})
export class MyCollectPage {
  collectArr:string[]=[ '全部','线路' ,'商品','游记'];
  collect:string=this.collectArr[0];

  collectList = [
    {img: 'assets/imgs/self-tour/termini1.png',
      title: '骑迹，成都至珠峰大本营，三千公里云和月，让我知道我是谁。',
      time: '30天前', type: '游记'},
    {img: 'assets/imgs/self-tour/termini2.png',
      title: '拉萨五日游，西藏珠峰环线5日游·珠穆朗玛峰/纳木错/扎什伦布寺',
      time: '2018-01-24', type: '线路',price:2150},
    {img: 'assets/imgs/self-tour/termini3.png',
      title: '我盘过最长最远的路，是你的山路【川西北六日转山记】',
      time: '2018-02-08', type: '游记'},
    {img: 'assets/imgs/self-tour/termini4.png',
      title: '西藏手工产品西藏工艺品镶嵌玛瑙宝石银质装饰品',
      time: '2018-03-01', type: '商品',price:279.00},
    {img: 'assets/imgs/self-tour/termini5.png',
      title: '[蜂首游记]远方很远，藏行川西，只为许你一个魔幻世界',
      time: '2018-03-23', type: '游记'},
    {img: 'assets/imgs/self-tour/termini6.png',
      title: '纳木错', time: '2018-02-12', type: '线路'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  segmentChanged(event){}

  swipeEvent(event) {
    //向左滑
    if (event.direction == 2) {
      if (this.collectArr.indexOf(this.collect) < 4) {
        this.collect = this.collectArr[this.collectArr.indexOf(this.collect) + 1];
      }
    }
    //向右滑
    if (event.direction == 4) {
      if (this.collectArr.indexOf(this.collect) > 0) {
        this.collect = this.collectArr[this.collectArr.indexOf(this.collect) - 1];
      }
    }
  }

}
