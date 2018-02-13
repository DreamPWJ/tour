import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, ModalController, NavController, NavParams, Platform, Slides} from 'ionic-angular';
import {CalendarModal, CalendarModalOptions, DayConfig} from "ion2-calendar";
import {AppService} from "../../../providers/util/app.service";

declare  let startApp;
declare  let appAvailability;

@IonicPage()
@Component({
  selector: 'page-road-detail',
  templateUrl: 'road-detail.html',
})
export class RoadDetailPage {
  @ViewChild("slides") slides: Slides;
  @ViewChild(Content) content: Content;
  roadDetailsegArr: string[] = ['豪华游', '商务游'];
  roadDetailseg: string = this.roadDetailsegArr[0];

  slidesLength: number = 0;
  currentIndex: number = 1;
  btnFlg: number = 1;
  isTabTop: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
              public  platform: Platform,public  appService: AppService) {
  }

  segmentChanged(event) {

  }


  pricedateList = [
    {price: '￥1380', date: '1/13', week: '周六'},
    {price: '￥1580', date: '1/14', week: '周日'},
    {price: '￥1580', date: '1/15', week: '周一'},
    {price: '￥1380', date: '1/16', week: '周二'},
    {price: '￥1380', date: '1/17', week: '周三'},
    {price: '￥1580', date: '1/18', week: '周四'},
    {price: '￥1580', date: '1/19', week: '周五'},

  ];

  xingchengList = [
    {day: 'DAY 1', xingcheng: '拉萨•米拉山口•雅鲁藏布大峡谷•索松村'},
    {day: 'DAY 2', xingcheng: '拉萨•米拉山口•雅鲁藏布大峡谷•索松村'},
    {day: 'DAY 3', xingcheng: '拉萨•米拉山口•雅鲁藏布大峡谷•索松村'},
  ];

  ionViewDidEnter() {

    this.slidesLength = this.slides.length()
  }

  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex() + 1;
  }

  btnFlgSelect(index: number) {
    this.btnFlg = index;
  }

  /**
   * 打开日历模态框模式
   */
  openCalendar() {
    let date = new Date();
    let _daysConfig: DayConfig[] = [];
    for (let i = 1; i <= 31; i++) {
      _daysConfig.push({
        date: new Date(date.getFullYear(), date.getMonth(), i),
        subTitle: `￥${812 + i}`
      }, {
        date: new Date(date.getFullYear(), date.getMonth() + 1, i),
        subTitle: `￥${760 + i}`
      })
    }

    const options: CalendarModalOptions = {
      pickMode: "single",
      cssClass: 'my-calendar',
      monthFormat: 'YYYY 年 MM 月 ',
      weekdays: ['日', '一', '二', '三', '四', '五', '六'],
      weekStart: 1,
      canBackwardsSelected: false,
      defaultDate: date,
      title: "日期价格查看",
      color: 'danger',
      closeIcon: true,
      doneLabel: "",
      closeLabel: "",
      showYearPicker: true,
      daysConfig: _daysConfig
    };

    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });

    myCalendar.present();

    myCalendar.onDidDismiss(date => {
      console.log(date);
    });
  }

  /**
   * 打开百度地图APP
   */
  openBaiDuMap() {
    let scheme;
    let sApp;
    if (this.platform.is('ios')) {
      scheme = 'baidu://';
    } else if (this.platform.is('android')) {
      scheme = 'com.baidu.BaiduMap';
    }

    appAvailability.check(
      scheme,       // URI Scheme or Package Name
      () =>{  // Success callback
        if (this.platform.is('ios')) {

          sApp = startApp.set("baidumap://");
          sApp.start(()=> { /* success */

          }, (error)=> { /* fail */

          });
        } else if (this.platform.is('android')) {

           sApp = startApp.set({ /* params */
            "action":"ACTION_VIEW",
            "category":"CATEGORY_DEFAULT",
            "type":"text/css",
            "package":"com.baidu.BaiduMap",
            "uri":"baidumap://map/direction?origin=我的位置&destination=成都大学&mode=driving&region=成都",
            "flags":["FLAG_ACTIVITY_CLEAR_TOP","FLAG_ACTIVITY_CLEAR_TASK"],
            // "component": ["com.android.GoBallistic","com.android.GoBallistic.Activity"],
            "intentstart":"startActivity",
          }, { /* extras */
            "EXTRA_STREAM":"extraValue1",
            "extraKey2":"extraValue2"
          });
          sApp.start(() => { /* success */

          }, (error) => { /* fail */

          });
        }


      },
      () =>{  // Error callback
        this.appService.toast("百度地图未安装,请先安装APP")
        if (this.platform.is('ios')) {
          window.open("https://itunes.apple.com/cn/app/id452186370")
        } else if (this.platform.is('android')) {
          window.open("http://map.baidu.com/zt/client/index/")
        }
      }
    );
  }

  //回到顶部
  scrollHandler(event) {
    this.content.scrollTop >= 150 ? this.isTabTop = true : this.isTabTop = false;
    /*    if (this.platform.is("cordova")) {
          this.isTabTop?this.statusBar.backgroundColorByHexString("#ffffff"):this.statusBar.styleDefault();
        }*/
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

}
