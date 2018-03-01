import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService} from "../../../providers/util/app.service";
import "../../../assets/js/map.js";

/**
 * Generated class for the SendcarMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare let AMap;

@IonicPage()
@Component({
  selector: 'page-sendcar-map',
  templateUrl: 'sendcar-map.html',
})
export class SendcarMapPage {
  @ViewChild('maps') maps: ElementRef;
  map: any;//地图对象
  placeList = [
    {index:1,place:'当前：景区直通车（天府广场站）附近',address:'人民东路天府广场负一楼'},
    {index:2,place:'老味道',address:'西御街6号天府广场下沉广场B1楼(近天府广场站E出口)'},
    {index:3,place:'同德对讲机分店',address:'提督街1号'},
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
        zoom: 12, //设置地图缩放级别
        center:[104.071161,30.656965],
        rotateEnable: true,
        showBuildingBlock: true
      })
    });

    //添加点标记，并使用自己的icon
    new AMap.Marker({
      map: this.map,
      position: [104.071161,30.656965],
      /*icon: new AMap.Icon({
        size: new AMap.Size(40, 50),  //图标大小
        image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2797925332,1430691737&fm=27&gp=0.jpg"
      })*/
    });


    let circle = new AMap.Circle({
      center: new AMap.LngLat("104.071161", "30.656965"),// 圆心位置
      radius: 4000, //半径
      strokeColor: "#3FA2FF", //线颜色
      strokeOpacity: 1, //线透明度
      strokeWeight: 3, //线粗细度
      strokeStyle: "dashed",  //线样式
      fillColor: "#3FA2FF", //填充颜色
      fillOpacity: 0.16//填充透明度
    });
    circle.setMap(this.map);

  }

}
