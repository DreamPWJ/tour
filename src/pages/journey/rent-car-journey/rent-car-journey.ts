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
  carList = [
    {index:1,name:`距您<span style="color: #efa675">0.3</span>公里`,position:'104.06,30.6730',icon:'assets/imgs/journey/rent-car/car.png'},
    {index:2,name:'',position:'104.056,30.6720',icon:'assets/imgs/journey/rent-car/huan.png'},
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

    for (let i = 0; i < this.carList.length; i += 1) {
        new AMap.Marker({
        offset: new AMap.Pixel(-55,-55),
        zIndex: 101,
        title: this.carList[i].name,
        extData:this.carList[i].index,
        position: this.carList[i].position.split(','),
        icon: this.carList[i].icon,
        label:{
          offset: new AMap.Pixel(-10, -10),
          content:this.carList[i].name
        },
        map: this.map
      });
/*      markers.push(marker);
      marker.on('click',function(e){
        // marker.setContent(marker.getTitle());
        // 设置label标签
        marker.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
          offset: new AMap.Pixel(15, 2),//修改label相对于maker的位置
          content: marker.getTitle()
        });
      });*/
    }
    //连线 绘制轨迹
    new AMap.Polyline({
      map: this.map,
      path: [this.carList[0].position.split(','),this.carList[2].position.split(',')],
      strokeColor: "#689fd7",  //线颜色
      strokeOpacity: 0.8,     //线透明度
      strokeWeight: 3,      //线宽
      strokeStyle: "dashed"  //线样式
    });
  }
}
