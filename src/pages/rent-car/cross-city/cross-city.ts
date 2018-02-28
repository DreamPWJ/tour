import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CrossCityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cross-city',
  templateUrl: 'cross-city.html',
})
export class CrossCityPage {
  wrapFlg:boolean = true;
  crossList = [
    {index:1,gocity:'成都',endcity:'三亚',goday:'02.23 周五',endday:'02.26 周一',price:'99',time:"4",cartype:'大众朗逸',img:'assets/imgs/rent-car/car.png'},
    {index:1,gocity:'成都',endcity:'三亚',goday:'02.23 周五',endday:'02.26 周一',price:'99',time:"4",cartype:'大众朗逸',img:'assets/imgs/rent-car/car.png'},
    {index:1,gocity:'成都',endcity:'三亚',goday:'02.23 周五',endday:'02.26 周一',price:'99',time:"4",cartype:'大众朗逸',img:'assets/imgs/rent-car/car.png'},
    {index:1,gocity:'成都',endcity:'三亚',goday:'02.23 周五',endday:'02.26 周一',price:'99',time:"4",cartype:'大众朗逸',img:'assets/imgs/rent-car/car.png'},
    {index:1,gocity:'成都',endcity:'三亚',goday:'02.23 周五',endday:'02.26 周一',price:'99',time:"4",cartype:'大众朗逸',img:'assets/imgs/rent-car/car.png'},
    {index:1,gocity:'成都',endcity:'三亚',goday:'02.23 周五',endday:'02.26 周一',price:'99',time:"4",cartype:'大众朗逸',img:'assets/imgs/rent-car/car.png'},
    {index:1,gocity:'成都',endcity:'三亚',goday:'02.23 周五',endday:'02.26 周一',price:'99',time:"4",cartype:'大众朗逸',img:'assets/imgs/rent-car/car.png'},
    {index:1,gocity:'成都',endcity:'三亚',goday:'02.23 周五',endday:'02.26 周一',price:'99',time:"4",cartype:'大众朗逸',img:'assets/imgs/rent-car/car.png'},
    {index:1,gocity:'成都',endcity:'三亚',goday:'02.23 周五',endday:'02.26 周一',price:'99',time:"4",cartype:'大众朗逸',img:'assets/imgs/rent-car/car.png'},
    {index:1,gocity:'成都',endcity:'三亚',goday:'02.23 周五',endday:'02.26 周一',price:'99',time:"4",cartype:'大众朗逸',img:'assets/imgs/rent-car/car.png'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  wrapStyle(){
    if(this.wrapFlg){
      this.wrapFlg = false;
    }else{
      this.wrapFlg = true;
    }
  }

}
