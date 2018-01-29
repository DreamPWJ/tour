import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare let AMap;
/**
 * Generated class for the JourneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-journey',
  templateUrl: 'journey.html',
})
export class JourneyPage {
  @ViewChild('maps') maps: ElementRef;
  map: any;//地图对象

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  ionViewDidEnter() {
    this.map = new AMap.Map(this.maps.nativeElement, {
      view: new AMap.View2D({//创建地图二维视口
        zoom: 13, //设置地图缩放级别
        rotateEnable: true,
        showBuildingBlock: true
      })
    });
  }



}
