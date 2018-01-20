import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

/**
 * Generated class for the ViewImgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-img',
  templateUrl: 'view-img.html',
})
export class ViewImgPage {
  @ViewChild(Slides) slides: Slides;
  currentIndex:number=1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  slideChanged() {
  this.currentIndex = this.slides.getActiveIndex();
  }

}
