import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 *新增收件地址
 */

@IonicPage()
@Component({
  selector: 'page-add-address',
  templateUrl: 'add-address.html',
})
export class AddAddressPage {
  cityData: any[]; //城市数据
  cityName:string = '四川省/成都市/成华区'; //初始化城市名
  code:string; //城市编码
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.setCityPickerData();
  }

  ionViewDidLoad() {

  }

  /**
   * 获取城市数据
   */
  setCityPickerData(){
    this.http.get('./assets/data/city-data.json')
      .toPromise()
      .then(response =>   {
        console.log(response);
        this.cityData = response as any[]
      } )
      .catch( err => {
        return Promise.reject(err)
      })
  }

  /**
   * 城市选择器被改变时触发的事件
   * @param event
   */
  cityChange(event){
    console.log(event);
    this.code = event['region'].value
  }
}
