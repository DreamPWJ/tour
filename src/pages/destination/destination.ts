import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {AppService} from "../../providers/util/app.service";

/**
 * Generated class for the DestinationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-destination',
  templateUrl: 'destination.html',
})
export class DestinationPage {
  @ViewChild(Content) content: Content;
  @ViewChild("slides") slides: Slides;
  slidesLength: number = 0;
  currentIndex: number = 1;
  isTabTop: boolean = false;
  selectFlg = 1;
  remenCity = [
    {index:1,city:[{name:'拉萨',english:'Lhasa',img:'assets/imgs/self-tour/china1.png'},
        {name:'山南',english:'Shannan',img:'assets/imgs/self-tour/china2.png'},
        {name:'林芝',english:'Nyingchi',img:'assets/imgs/self-tour/china3.png'}]},
    {index:2,city:[{name:'日喀则',english:'Rikaze',img:'assets/imgs/self-tour/china4.png'},
        {name:'山南',english:'Shannan',img:'assets/imgs/self-tour/china5.png'},
        {name:'林芝',english:'Nyingchi',img:'assets/imgs/self-tour/china6.png'}]},
    {index:3,city:[{name:'那曲',english:'Naqu',img:'assets/imgs/self-tour/china7.png'},
        {name:'昌都',english:'Qamdo',img:'assets/imgs/self-tour/china8.png'},
        {name:'林芝',english:'Nyingchi',img:'assets/imgs/self-tour/china3.png'}]},
  ];

  roadList = [
    {index:1,name:'精华推荐'},{index:2,name:'当地自驾'},{index:3,name:'多地出发'},{index:4,name:'五一优惠'},{index:5,name:'亲子活动'},
    {index:6,name:'十一优惠'},{index:7,name:'当地自驾'},
  ];

  qianggouList = [
    {index:1,name:'【热门】拉萨房车自驾游2天自由行',price:2149,img:'assets/imgs/self-tour/china5.png'},
    {index:2,name:'【热门】西藏房车自驾游2天自由行',price:3000,img:'assets/imgs/self-tour/china2.png'},
    {index:3,name:'【热门】林芝2天自由行',price:2000,img:'assets/imgs/self-tour/china3.png'},
    {index:4,name:'【热门】桂林自驾游2天自由行',price:1999,img:'assets/imgs/self-tour/china4.png'},
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppService) {
  }


  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewWillEnter(){
    this.appService.loadingHide();
  }

  ionViewDidEnter(){
    this.slidesLength = this.slides.length()
  }

  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex() + 1;
  }

  scrollHandler(event) {
    this.content.scrollTop >= 900 ? this.isTabTop = true : this.isTabTop = false;
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

}
