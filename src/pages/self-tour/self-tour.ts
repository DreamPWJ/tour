import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';

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
  @ViewChild("slides") slides: Slides;
  slidesLength: number = 0;
  currentIndex: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

  }

  ionViewDidEnter(){
    this.slidesLength = this.slides.length()
  }

  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex() + 1;
  }
}
