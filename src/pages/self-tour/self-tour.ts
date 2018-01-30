import {Component, ViewChild} from '@angular/core';
import {Content, NavController, NavParams, Slides} from 'ionic-angular';
import {AppService} from "../../providers/util/app.service";

/**
 * Generated class for the SelfTourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-self-tour',
  templateUrl: 'self-tour.html',
})
export class SelfTourPage {
  @ViewChild(Content) content: Content;
  @ViewChild("slides") slides: Slides;
  slidesLength: number = 0;
  currentIndex: number = 1;
  isTabTop: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppService) {

  }

  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewWillEnter(){
    this.appService.loadingHide();
  }

  ionViewDidEnter(){

    this.slidesLength = this.slides.length()
  }

  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex() + 1;
  }

  scrollHandler(event) {
    this.content.scrollTop >= 200 ? this.isTabTop = true : this.isTabTop = false;

  }
}
