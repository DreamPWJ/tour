import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CirclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-circle',
  templateUrl: 'circle.html',
})
export class CirclePage {
  circleList = [
    {index:1,img:'assets/imgs/self-tour/china3.png',title:'川藏南线自驾圈',content:'318国道，主要途经芒康·波密·林芝·拉萨·芒康·波密·林芝'},
    {index:2,img:'assets/imgs/self-tour/china4.png',title:'川藏北自驾圈',content:'317国道，主要途经甘孜·江达·丁青·那曲'},
    {index:3,img:'assets/imgs/self-tour/china5.png',title:'川藏南线自驾圈',content:'318国道，主要途经芒康·波密·林芝·拉萨'},
    {index:4,img:'assets/imgs/self-tour/china6.png',title:'川藏北自驾圈',content:'317国道，主要途经甘孜·江达·丁青·那曲'},
    {index:5,img:'assets/imgs/self-tour/china7.png',title:'川藏南线自驾圈',content:'318国道，主要途经芒康·波密·林芝·拉萨'},
    {index:6,img:'assets/imgs/self-tour/china8.png',title:'川藏北自驾圈',content:'318国道，主要途经芒康·波密·林芝·拉萨'},
    {index:7,img:'assets/imgs/self-tour/china1.png',title:'川藏南线自驾圈',content:'317国道，主要途经甘孜·江达·丁青·那曲'},
    {index:8,img:'assets/imgs/self-tour/china2.png',title:'川藏北自驾圈',content:'318国道，主要途经芒康·波密·林芝·拉萨'},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CirclePage');
  }

}
