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
    price:16999
    } ,
    {
      title:"租车",
      img:'assets/imgs/journey/1.png',
      price:280
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
