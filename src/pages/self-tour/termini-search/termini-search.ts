import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the TerminiSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-termini-search',
  templateUrl: 'termini-search.html',
})
export class TerminiSearchPage {
  public selectFlg:number;


  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.selectFlg = 1;
  }

  terminiSelect(flg:number){
    this.selectFlg = flg;
  }

  //搜索
  filterItems(ev: any) {
/*    let val = ev.target.value;*/

  }

  //关闭
  dismiss() {
    this.viewCtrl.dismiss();
  }

  cityList = [
    {name:'成都'},
    {name:'康定'},
    {name:'亚丁'},
    {name:'拉萨'},
    {name:'林芝'},
    {name:'左贡'},
    {name:'贵阳'},
    {name:'遵义'},
    {name:'兰州'},
    {name:'西宁'},
    {name:'乌鲁木齐'},
    {name:'呼和浩特'},
  ];

  seasonList = [
    {month:'1月',seasonImageUrl: 'assets/imgs/self-tour/termini1.png'},
    {month:'2月',seasonImageUrl: 'assets/imgs/self-tour/termini2.png'},
    {month:'3月',seasonImageUrl: 'assets/imgs/self-tour/termini3.png'},
    {month:'4月',seasonImageUrl: 'assets/imgs/self-tour/termini4.png'},
    {month:'5月',seasonImageUrl: 'assets/imgs/self-tour/termini5.png'},
    {month:'6月',seasonImageUrl: 'assets/imgs/self-tour/termini6.png'},
    {month:'7月',seasonImageUrl: 'assets/imgs/self-tour/termini7.png'},
    {month:'8月',seasonImageUrl: 'assets/imgs/self-tour/termini8.png'},
    {month:'9月',seasonImageUrl: 'assets/imgs/self-tour/termini9.png'},
    {month:'10月',seasonImageUrl: 'assets/imgs/self-tour/termini10.png'},
    {month:'11月',seasonImageUrl: 'assets/imgs/self-tour/termini11.png'},
    {month:'12月',seasonImageUrl: 'assets/imgs/self-tour/termini12.png'},
  ];

  chinaList = [
    {chinaImageUrl: 'assets/imgs/self-tour/china1.png',province:'四川',englishname:'Sichuan'},
    {chinaImageUrl: 'assets/imgs/self-tour/china2.png',province:'西藏',englishname:'Tibet'},
    {chinaImageUrl: 'assets/imgs/self-tour/china3.png',province:'云南',englishname:'Yunnan'},
    {chinaImageUrl: 'assets/imgs/self-tour/china4.png',province:'贵州',englishname:'Guizhou'},
    {chinaImageUrl: 'assets/imgs/self-tour/china5.png',province:'甘肃',englishname:'Gansu'},
    {chinaImageUrl: 'assets/imgs/self-tour/china6.png',province:'新疆',englishname:'Xinjiang'},
    {chinaImageUrl: 'assets/imgs/self-tour/china7.png',province:'内蒙古',englishname:'InnerMongolia'},
    {chinaImageUrl: 'assets/imgs/self-tour/china8.png',province:'青海',englishname:'Qinghai'},
  ];

}
