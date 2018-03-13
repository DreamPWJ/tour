import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService} from "../../../providers/util/app.service";

/**
 * Generated class for the CarTypeSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-type-select',
  templateUrl: 'car-type-select.html',
})
export class CarTypeSelectPage {
  cartypeArr:string[]=[ '全部','经济型' ,'舒适型','商务型','豪华型','SUV','MPV'];
  cartypeSeg:string=this.cartypeArr[0];

  cartypeList = [
    {index:1,img:'assets/imgs/journey/car.png',name:'雪佛兰科鲁兹',description:'三厢•1.5自动•乘坐5人',price:'99'},
    {index:1,img:'assets/imgs/journey/car.png',name:'雪佛兰科鲁兹',description:'三厢•1.5自动•乘坐5人',price:'99'},
    {index:1,img:'assets/imgs/journey/car.png',name:'雪佛兰科鲁兹',description:'三厢•1.5自动•乘坐5人',price:'99'},
    {index:1,img:'assets/imgs/journey/car.png',name:'雪佛兰科鲁兹',description:'三厢•1.5自动•乘坐5人',price:'99'},
    {index:1,img:'assets/imgs/journey/car.png',name:'雪佛兰科鲁兹',description:'三厢•1.5自动•乘坐5人',price:'99'},
    {index:1,img:'assets/imgs/journey/car.png',name:'雪佛兰科鲁兹',description:'三厢•1.5自动•乘坐5人',price:'99'},
    {index:1,img:'assets/imgs/journey/car.png',name:'雪佛兰科鲁兹',description:'三厢•1.5自动•乘坐5人',price:'99'},
    {index:1,img:'assets/imgs/journey/car.png',name:'雪佛兰科鲁兹',description:'三厢•1.5自动•乘坐5人',price:'99'},
  ];

  constructor(public navCtrl: NavController,public appService: AppService) {
  }
  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewWillEnter(){
    this.appService.loadingHide();
  }

  segmentChanged(event){}
  swipeEvnet(event) {
    //向左滑
    if (event.direction == 2) {
      if (this.cartypeArr.indexOf(this.cartypeSeg) < 4) {
        this.cartypeSeg = this.cartypeArr[this.cartypeArr.indexOf(this.cartypeSeg) + 1];
      }
    }
    //向右滑
    if (event.direction == 4) {
      if (this.cartypeArr.indexOf(this.cartypeSeg) > 0) {
        this.cartypeSeg = this.cartypeArr[this.cartypeArr.indexOf(this.cartypeSeg) - 1];
      }
    }
  }
}
