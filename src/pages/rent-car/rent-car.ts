import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

/**
 * Generated class for the RentCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rent-car',
  templateUrl: 'rent-car.html',
})
export class RentCarPage {
  @ViewChild(Content) content: Content;
  @ViewChild("slides") slides: Slides;
  slidesLength: number = 0;
  currentIndex: number = 1;
  isTabTop: boolean = false;

  jingpinRoad = [
    {img:'assets/imgs/rent-car/rentcar2.png',name:'【云南8日游】',content:'寻觅世外桃源，观昆明·红河·元阳·普者黑·坝美',num:16,price:'￥2590'},
    {img:'assets/imgs/rent-car/rentcar3.png',name:'【云南8日游】',content:'寻觅世外桃源，观昆明·红河·元阳·普者黑·坝美',num:16,price:'￥2590'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter(){
    this.slidesLength = this.slides.length()
  }

  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex() + 1;
  }

  scrollHandler(event) {
    this.content.scrollTop >= 150 ? this.isTabTop = true : this.isTabTop = false;

  }

  scrollToTop() {
    this.content.scrollToTop();
  }

}
