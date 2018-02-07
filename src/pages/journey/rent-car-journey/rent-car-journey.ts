import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService} from "../../../providers/util/app.service";
import "../../../assets/js/map.js";
declare let AMap;



@IonicPage()
@Component({
  selector: 'page-rent-car-journey',
  templateUrl: 'rent-car-journey.html',
})
export class RentCarJourneyPage {
  @ViewChild('maps') maps: ElementRef;
  map: any;//地图对象
  dayList = [
    {index:1,name:'距您0.3公里',position:'104.06,30.6730',icon:'assets/imgs/journey/rent-car/car.png'},
    {index:2,name:'',position:'104.058,30.6720',icon:'assets/imgs/journey/rent-car/huan.png'},
    {index:3,name:'',position:'104.062,30.6720',icon:'assets/imgs/journey/rent-car/qu.png'},
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
        zoom: 16, //设置地图缩放级别
        center:[104.06,30.67],
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
  }
}
