import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService} from "../../../providers/util/app.service";


/**
 * Generated class for the SelfTourJourneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare let AMap;

@IonicPage()
@Component({
  selector: 'page-self-tour-journey',
  templateUrl: 'self-tour-journey.html',
})
export class SelfTourJourneyPage {
  @ViewChild('maps') maps: ElementRef;
  map: any;//地图对象
  dateFlg:number = 1;//日期选择flg

  selfJourList = [
    {gongli:'93km',index:1,date:'全部',name:'布达拉宫白塔',position:'93.600738,30.054808',icon:'assets/imgs/journey/marker1.png',img1:'assets/imgs/self-tour/china1.png',content:'出发'},
    {gongli:'93km',index:2,date:'2018.03.15',name:'米拉山口',position:'93.021923,30.001119',icon:'assets/imgs/journey/marker2.png',img1:'assets/imgs/self-tour/china2.png',content:'景点 建议停留:30分钟'},
    {gongli:'93km',index:3,date:'2018.03.16',name:'雅鲁藏布大峡谷',position:'94.352642,29.641304',icon:'assets/imgs/journey/marker3.png',img1:'assets/imgs/self-tour/china3.png',content:'景点'},
    {gongli:'93km',index:4,date:'2018.03.17',name:'珠穆朗玛峰',position:'94.995342,29.788007',icon:'assets/imgs/journey/marker4.png',img1:'assets/imgs/self-tour/china4.png',content:'景点'},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams,public appService: AppService) {
  }

  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewDidEnter() {
    this.appService.loadingHide();
    this.map = new AMap.Map(this.maps.nativeElement, {
      view: new AMap.View2D({//创建地图二维视口
        zoom: 7, //设置地图缩放级别
        center:[93.600738,30.054808],
        rotateEnable: true,
        showBuildingBlock: true
      })
    });
    let markers = []; //标记
    for (let i = 0; i < this.selfJourList.length; i += 1) {
      let marker;
      marker = new AMap.Marker({
        offset: new AMap.Pixel(-12,-12),
        zIndex: 101,
        title: this.selfJourList[i].name,
        extData:this.selfJourList[i].index,
        position: this.selfJourList[i].position.split(','),
        icon: this.selfJourList[i].icon,
        // content: '<div class="">1</div>' , //自定义点标记覆盖物内容
        map: this.map
      });
      markers.push(marker);
      marker.on('click',function(e){
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
    for (let i = 0; i < this.selfJourList.length; i++) {
      lineArr.push(this.selfJourList[i].position.split(','));
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

  dateSelect(index:number){
    this.dateFlg = index;
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
