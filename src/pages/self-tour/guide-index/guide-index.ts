import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GuideIndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guide-index',
  templateUrl: 'guide-index.html',
})
export class GuideIndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  guideList = [
    {imgUrl:'assets/imgs/self-tour/guide1.jpg',name:'四川',pinyin:'SICHUAN'},
    {imgUrl:'assets/imgs/self-tour/guide2.jpg',name:'西藏',pinyin:'TIBET'},
    {imgUrl:'assets/imgs/self-tour/guide3.jpg',name:'云南',pinyin:'YUNNAN'},
    {imgUrl:'assets/imgs/self-tour/guide4.jpg',name:'贵州',pinyin:'GUIZHOU'},
    {imgUrl:'assets/imgs/self-tour/guide5.jpg',name:'内蒙',pinyin:'INNER MONGOLIA'},
  ];

}
