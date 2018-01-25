import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AppService} from "../../providers/util/app.service";

/**
 * Generated class for the RankingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ranking-list',
  templateUrl: 'ranking-list.html',
})
export class RankingListPage {
  backgroundImage = 'assets/imgs/main/home-bg.jpg';
  numArr:number[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppService) {
  }

  ionViewDidLoad() {
    this.appService.loadingShow();
    for(let i=4;i<=15;i++)
       this.numArr.push(i);
  }


  ionViewWillEnter() {
    this.appService.loadingHide();
  }
}
