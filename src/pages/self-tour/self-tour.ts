import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

/**
 * Generated class for the SelfTourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-self-tour',
  templateUrl: 'self-tour.html',
})
export class SelfTourPage {
  @ViewChild(Slides) slides:Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.slides.freeMode = true;
    this.slides.slidesPerView = "auto";
  }
  slideChanged() {
/*    this.currentIndex = this.slides.getActiveIndex() + 1;*/
  }
}
