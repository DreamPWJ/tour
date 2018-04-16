import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TravelSharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travel-share',
  templateUrl: 'travel-share.html',
})
export class TravelSharePage {
  selectFlg:string = '全部';
  foldFlg:boolean = true;

  youjiList = [
    {index:1,personImg:'assets/imgs/main/head.jpg',name:'Sally小姐',time:'4小时前',title:'散落在雪山屋脊的星辰，穿梭在云中雾里的脚印',img1:'assets/imgs/self-tour/china1.png',img2:'assets/imgs/self-tour/china2.png',img3:'assets/imgs/self-tour/china3.png',dingwei:'西藏 · 拉萨',pinglun:439,zan:1439},
    {index:1,personImg:'assets/imgs/main/head.jpg',name:'昨日如风',time:'10小时前',title:'【暖暖的深秋，爽爽的贵阳，火火的旅行，酷酷的体验】-20个超级旅行',img1:'assets/imgs/self-tour/china4.png',img2:'assets/imgs/self-tour/china5.png',img3:'assets/imgs/self-tour/china6.png',dingwei:'贵州 · 贵阳',pinglun:354,zan:657}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelSharePage');
  }

}
