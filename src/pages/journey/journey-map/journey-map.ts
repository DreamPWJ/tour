import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService} from "../../../providers/util/app.service";
import "../../../assets/js/map.js";
declare let AMap;

@IonicPage()
@Component({
  selector: 'page-journey-map',
  templateUrl: 'journey-map.html',
})
export class JourneyMapPage {
  @ViewChild('maps') maps: ElementRef;
  map: any;//地图对象
  dayIndex:number = -1; //footer选择
  dayList = [
    {gongli:'出发',index:1,name:'布达拉宫白塔',position:'93.600738,30.054808',icon:'assets/imgs/journey/marker1.png',img1:'assets/imgs/self-tour/guide1.jpg',content:'布达拉宫白塔,即布达拉宫白塔，地处布达拉宫白塔，地处布达拉宫白塔，地处布达拉宫白塔，地处布达拉宫白塔，地处布达拉宫白塔。'},
    {gongli:'-93公里-',index:2,name:'米拉山口',position:'93.021923,30.001119',icon:'assets/imgs/journey/marker2.png',img1:'assets/imgs/self-tour/guide2.jpg',content:'米拉山口,即西藏米拉山的山口，地处拉萨市到墨竹米拉山口即西藏米拉山的山口，地处拉萨市到墨竹即西藏米拉山的山口，地处拉萨市到墨竹即西藏米拉山的山口，地处拉萨市到墨竹即西藏米拉山的山口，地处拉萨市到墨竹。'},
    {gongli:'-93公里-',index:3,name:'雅鲁藏布大峡谷',position:'94.352642,29.641304',icon:'assets/imgs/journey/marker3.png',img1:'assets/imgs/self-tour/guide3.jpg',content:'雅鲁藏布大峡谷,即西藏雅鲁藏布大峡谷，地处拉萨市雅鲁藏布大峡谷，雅鲁藏布大峡谷雅鲁藏布大峡谷雅鲁藏布大峡谷雅鲁藏布大峡谷雅鲁藏布大峡谷，雅鲁藏布大峡谷雅鲁藏布大峡谷雅鲁藏布大峡谷。'},
    {gongli:'-93公里-',index:4,name:'珠穆朗玛峰',position:'94.995342,29.788007',icon:'assets/imgs/journey/marker4.png',img1:'assets/imgs/self-tour/guide4.jpg',content:'珠穆朗玛峰，珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠，穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰，珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰珠穆朗玛峰。'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppService) {
  }

  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewDidEnter() {
    this.appService.loadingHide();
    this.map = new AMap.Map(this.maps.nativeElement, {
      view: new AMap.View2D({//创建地图二维视口
        zoom: 8, //设置地图缩放级别
        center:[93.600738,30.054808],
        rotateEnable: true,
        showBuildingBlock: true
      })
    });
    let markers = []; //标记
    for (let i = 0; i < this.dayList.length; i += 1) {
      let marker;
      marker = new AMap.Marker({
        offset: new AMap.Pixel(-12,-12),
        zIndex: 101,
        title: this.dayList[i].name,
        extData:this.dayList[i].index,
        position: this.dayList[i].position.split(','),
        icon: this.dayList[i].icon,
        animation:"AMAP_ANIMATION_DROP",
        // content: '<div class="">1</div>' , //自定义点标记覆盖物内容
        map: this.map
      });
      markers.push(marker);
      marker.on('click',(e)=>{
        // marker.setContent(marker.getTitle());
        // 设置label标签
          marker.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
            offset: new AMap.Pixel(15, 2),//修改label相对于maker的位置
            content: marker.getTitle()
          });
      });
    }

    //连线 绘制轨迹
    let lineArr = [];
    for (let i = 0; i < this.dayList.length; i++) {
      lineArr.push(this.dayList[i].position.split(','));
    }

     new AMap.Polyline({
      map: this.map,
      path: lineArr,
      strokeColor: "#6aeff3",  //线颜色
      strokeOpacity: 0.8,     //线透明度
      strokeWeight: 3,      //线宽
      strokeStyle: "solid"  //线样式
    });
  }

  daySelect(index:number){
    if(this.dayIndex != index){
      this.dayIndex = index;
    }else{
      this.dayIndex = -1;//点击两次隐藏
    }
  }

  /**
   * 调起高德地图APP
   */
  aMapApp(){
    AMap.plugin(["AMap.Driving"], ()=> {
      let drivingOption = {
        policy:AMap.DrivingPolicy.LEAST_TIME,
        map:this.map
      };
      let driving = new AMap.Driving(drivingOption); //构造驾车导航类
      //根据起终点坐标规划驾车路线
      driving.search(
        [{keyword:'成都'},{keyword:'成都大学'}],
       (status,result)=>{
            driving.searchOnAMAP({
              origin:result.origin,
              destination:result.destination
            });
        });
    });
  }
}
