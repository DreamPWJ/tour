import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {AppService} from "../../providers/util/app.service";



@IonicPage()
@Component({
  selector: 'page-journey',
  templateUrl: 'journey.html',
})
export class JourneyPage {
  @ViewChild("slides") slides: Slides;
/*  slidesLength: number = 0;
  currentIndex: number = 1;*/
  slidesData:any=[{
    title:"自驾游",
    img:'assets/imgs/journey/2.png',
    price:16999,
    time:"2018.03.15",
    header:{title:"【最美芝林2日】",subTitle:"桃花季预售·雅鲁藏布大峡谷·嘎拉桃花村/拉如桃花村",isImg:false,imgUrl:""},
    details:[{title:'时间',content:'2018.03.15  - 2018.03.17'},{title:'类型',content:'豪华游'},{title:'人数',content:'成人·2   拼车·2'},{title:'服务',content:'司机·1  地接·1  车辆·1'}]

  } ,
    {
      title:"租车",
      img:'assets/imgs/journey/1.png',
      price:280,
      time:"2018.05.15",
      header:{title:"雪佛兰迈锐宝",subTitle:"三厢1.5T自动乘坐5人",isImg:true,imgUrl:"assets/imgs/journey/car.png"},
      details:[{title:'时间',content:'03.15  10:00  -  03.17  10:00'},{title:'数量',content:'1辆'},{title:'取车',content:'成都·电子科大维修中心'},{title:'还车',content:'成都·电子科大维修中心'},{title:'服务',content:'上门取送'}]
    }]
  constructor(public navCtrl: NavController, public navParams: NavParams,public  appService:AppService) {
  }

  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewWillEnter(){
    this.appService.loadingHide();

  }

  ionViewDidEnter(){
/*    this.slidesLength = this.slides.length()*/
  }

  slideChanged() {
/*    this.currentIndex = this.slides.getActiveIndex() + 1;*/
  }

}
