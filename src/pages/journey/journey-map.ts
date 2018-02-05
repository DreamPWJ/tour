import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService} from "../../providers/util/app.service";
import  "../../assets/js/map.js";
declare let AMap;
/**
 * Generated class for the JourneyMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-journey-map',
  templateUrl: 'journey-map.html',
})
export class JourneyMapPage {
  @ViewChild('maps') maps: ElementRef;
  map: any;//地图对象
  dayIndex:number = -1; //footer选择

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppService) {
  }

  ionViewDidLoad() {
    this.appService.loadingShow();
  }


  ionViewDidEnter() {
    this.appService.loadingHide();
    let map = new AMap.Map(this.maps.nativeElement, {
      view: new AMap.View2D({//创建地图二维视口
        zoom: 8, //设置地图缩放级别
        center:[93.600738,30.054808],
        rotateEnable: true,
        showBuildingBlock: true
      })
    });

    let markers = [{
      content: '<div class="amap-marker"></div>' , //自定义点标记覆盖物内容
      position: [93.600738,30.054808]
    }, {
      content: '<div class="amap-marker"></div>' , //自定义点标记覆盖物内容
      position: [94.352642,29.641304]
    }, {
      content: '<div class="amap-marker"></div>' , //自定义点标记覆盖物内容
      position: [93.021923,30.001119]
    },{
      content: '<div class="amap-marker"></div>' , //自定义点标记覆盖物内容
      position:[94.995342,29.788007]
    }, {
      content: '<div class="amap-marker"></div>' , //自定义点标记覆盖物内容
      position:[93.983227,30.017767]
    }];
    // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
    markers.forEach(function(marker) {
      new AMap.Marker({
        map: map,
        content: marker.content,
        position: [marker.position[0], marker.position[1]],
        offset: new AMap.Pixel(-12, -12)
      });
    });
  }

  dayList = [
    {gongli:'出发',index:1,name:'布达拉宫白塔',img1:'assets/imgs/self-tour/guide1.jpg',content:'布达拉宫白塔,即布达拉宫白塔，地处布达拉宫白塔，地处布达拉宫白塔，地处布达拉宫白塔，地处布达拉宫白塔，地处布达拉宫白塔。'},
    {gongli:'-93公里-',index:2,name:'米拉山口',img1:'assets/imgs/self-tour/guide2.jpg',content:'米拉山口,即西藏米拉山的山口，地处拉萨市到墨竹米拉山口即西藏米拉山的山口，地处拉萨市到墨竹即西藏米拉山的山口，地处拉萨市到墨竹即西藏米拉山的山口，地处拉萨市到墨竹即西藏米拉山的山口，地处拉萨市到墨竹。'},
    {gongli:'-93公里-',index:3,name:'雅鲁藏布大峡谷',img1:'assets/imgs/self-tour/guide3.jpg',content:'雅鲁藏布大峡谷,即西藏雅鲁藏布大峡谷，地处拉萨市雅鲁藏布大峡谷，雅鲁藏布大峡谷雅鲁藏布大峡谷雅鲁藏布大峡谷雅鲁藏布大峡谷雅鲁藏布大峡谷，雅鲁藏布大峡谷雅鲁藏布大峡谷雅鲁藏布大峡谷。'},
    {gongli:'-93公里-',index:4,name:'珠穆朗玛峰',img1:'assets/imgs/self-tour/guide4.jpg',content:'珠穆朗玛峰，珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠，穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰，珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰。'},
  ];

  daySelect(index:number){
    this.dayIndex = index;
  }

}
