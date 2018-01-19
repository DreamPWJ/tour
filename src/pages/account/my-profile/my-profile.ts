import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService} from "../../../providers/util/app.service";

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
  segmentArr:string[]=[ '行程 6','游记 7' ,'评论 23' ];
  segment:string=this.segmentArr[1];
  posts = [
    {
      postImageUrl: 'assets/imgs/account/youji1.png',
      title: `【Tibet 十日】 向往二十二年终于出发 (卷一)`,
      likes: 12,
      comments: 4,
      timestamp: '11h ago'
    },
    {
      postImageUrl: 'assets/imgs/account/youji2.png',
      title: `【Tibet 十日】 向往二十二年终于出发 (卷二)`,
      likes: 30,
      comments: 64,
      timestamp: '30d ago'
    },
    {
      postImageUrl: 'assets/imgs/account/youji1.png',
      title: `【Tibet 十日】 向往二十二年终于出发 (卷三)`,
      likes: 46,
      comments: 66,
      timestamp: '4mo ago'
    },
  ];

  user = {
    name: '怀念记忆',
    profileImage: 'assets/imgs/main/head.jpg',
    followers: 456,
    following: 1052,
    tweets: 35
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppService) {
  }

  ionViewDidLoad() {

  }

  segmentChanged(event){


  }
  imageTapped(post) {
    this.appService.toast('点击图片');
  }

  comment(post) {
    this.appService.toast('评论');
  }

  like(post) {
    this.appService.toast('喜欢');
  }

  swipeEvnet(event) {
    //向左滑
    if (event.direction == 2) {
      if (this.segmentArr.indexOf(this.segment) < 3) {
        this.segment = this.segmentArr[this.segmentArr.indexOf(this.segment) + 1];
      }
    }
    //向右滑
    if (event.direction == 4) {
      if (this.segmentArr.indexOf(this.segment) > 0) {
        this.segment = this.segmentArr[this.segmentArr.indexOf(this.segment) - 1];
      }
    }
  }


}
