import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform, Slides} from 'ionic-angular';
import {StatusBar} from "@ionic-native/status-bar";

/**
 * Generated class for the RoadDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-road-detail',
  templateUrl: 'road-detail.html',
})
export class RoadDetailPage {
  @ViewChild("slides") slides: Slides;
  @ViewChild(Content) content: Content;
  roadDetailsegArr:string[]=[ '豪华游','商务游'];
  roadDetailseg:string=this.roadDetailsegArr[0];

  slidesLength: number = 0;
  currentIndex: number = 1;
  btnFlg:number = 1;
  isTabTop: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public statusBar: StatusBar,public  platform: Platform) {
  }

  segmentChanged(event){
    if(this.isTabTop){
      this.content.scrollTo(0,150)
    }
  }

  swipeEvnet(event) {
    //向左滑
    if (event.direction == 2) {
      if (this.roadDetailsegArr.indexOf(this.roadDetailseg) < 2) {
        this.roadDetailseg = this.roadDetailsegArr[this.roadDetailsegArr.indexOf(this.roadDetailseg) + 1];
      }
    }
    //向右滑
    if (event.direction == 4) {
      if (this.roadDetailsegArr.indexOf(this.roadDetailseg) > 0) {
        this.roadDetailseg = this.roadDetailsegArr[this.roadDetailsegArr.indexOf(this.roadDetailseg) - 1];
      }
    }
  }

  pricedateList=[
    {price:'￥1380',date:'1/13',week:'周六'},
    {price:'￥1580',date:'1/14',week:'周日'},
    {price:'￥1580',date:'1/15',week:'周一'},
    {price:'￥1980',date:'1/16',week:'周二'},
  ];

  xingchengList=[
    {day:'DAY 1',xingcheng:'拉萨•米拉山口•雅鲁藏布大峡谷•索松村'},
    {day:'DAY 2',xingcheng:'拉萨•米拉山口•雅鲁藏布大峡谷•索松村'},
    {day:'DAY 3',xingcheng:'拉萨•米拉山口•雅鲁藏布大峡谷•索松村'},
  ];

  ionViewDidEnter(){

    this.slidesLength = this.slides.length()
  }

  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex() + 1;
  }

  btnFlgSelect(index:number){
    this.btnFlg = index;
  }

  //回到顶部
  scrollHandler(event) {
    this.content.scrollTop >= 150 ? this.isTabTop = true : this.isTabTop = false;
    if (this.platform.is("cordova")) {
      this.isTabTop?this.statusBar.backgroundColorByHexString("#ffffff"):this.statusBar.styleDefault();
    }
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

}
