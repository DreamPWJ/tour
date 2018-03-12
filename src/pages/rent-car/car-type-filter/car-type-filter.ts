import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the CarTypeFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-type-filter',
  templateUrl: 'car-type-filter.html',
})
export class CarTypeFilterPage {
  cartypeSel: number = 1;
  biansuSel: number = 1;
  pinpaiSel: number = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
  }

  //关闭
  dismiss() {
    this.viewCtrl.dismiss();
  }

  cartypeList = [
    {id:1,price:'不限',biansu:'不限'},
    {id:2,price:'￥0-99',biansu:'自动档'},
    {id:3,price:'￥300-500',biansu:'手动档'},
    {id:4,price:'￥300+',biansu:'电动车'},
  ];
  pinpaiList = [
    {id:1,name:'不限'},
    {id:2,name:'大众'},
    {id:3,name:'别克'},
    {id:4,name:'Jeep'},
    {id:5,name:'奥迪'},
    {id:6,name:'宝马'},
    {id:7,name:'奔驰'},
    {id:8,name:'本田'},
    {id:9,name:'标致'},
    {id:10,name:'丰田'},
  ]

  cartypeSelect(id){
    this.cartypeSel = id;
  }
  biansuSelect(id){
    this.biansuSel = id;
  }
  pinpaiSelect(id){
    this.pinpaiSel = id;
  }
}
