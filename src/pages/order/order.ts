import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  orderArr:string[]=[ '全部','未付款' ,'未完成','待点评'];
  orderseg:string=this.orderArr[0];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  segmentChanged(event){}
  swipeEvnet(event) {
    //向左滑
    if (event.direction == 2) {
      if (this.orderArr.indexOf(this.orderseg) < 4) {
        this.orderseg = this.orderArr[this.orderArr.indexOf(this.orderseg) + 1];
      }
    }
    //向右滑
    if (event.direction == 4) {
      if (this.orderArr.indexOf(this.orderseg) > 0) {
        this.orderseg = this.orderArr[this.orderArr.indexOf(this.orderseg) - 1];
      }
    }
  }

  shopList = [
    {img:'assets/imgs/self-tour/china1.png',title:'西藏手工产品西藏手工产品西藏手工产品',color:'白色',number:1,price:279.00},
    {img:'assets/imgs/self-tour/china2.png',title:'西藏手工产品西藏手工产品西藏手工产品',color:'白色',number:1,price:279.00},
  ];
}
