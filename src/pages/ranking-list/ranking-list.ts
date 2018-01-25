import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    for(let i=4;i<=15;i++)
       this.numArr.push(i);
  }

}
