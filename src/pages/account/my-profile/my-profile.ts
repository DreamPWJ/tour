import {Component, NgZone, ViewChild} from '@angular/core';
import {Content, NavController, NavParams, Platform} from 'ionic-angular';
import {AppService} from "../../../providers/util/app.service";
import {StatusBar} from "@ionic-native/status-bar";


/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
  @ViewChild(Content) content: Content;
  segmentArr: string[] = ['行程 6', '游记 7', '评论 23'];
  segment: string = this.segmentArr[0];
  isTabTop: boolean = false;
  posts = [
    {
      postImageUrl: 'assets/imgs/slide/slide1.jpeg',
      title: `【Tibet十日】向往二十二年终于出发`,
      likes: 12,
      comments: 4,
    },

    {
      postImageUrl: 'assets/imgs/slide/slide2.jpeg',
      title: `【Tibet十日】向往二十二年终于出发`,
      likes: 30,
      comments: 64,
      times: ''
    },
    {
      postImageUrl: 'assets/imgs/slide/slide3.jpeg',
      title: `【Tibet十日】向往二十二年终于出发`,
      likes: 46,
      comments: 66,
      times: ''
    },
  ];

  user = {
    name: '怀念记忆',
    profileImage: 'assets/imgs/main/head.jpg',
  };
  scrollAmount = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppService, public zone: NgZone, public statusBar: StatusBar,public  platform: Platform) {
  }

  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewWillEnter() {
    this.appService.loadingHide();
  }



  scrollHandler(event) {
    /*    console.log(this.content.scrollTop);*/
    this.content.scrollTop >= 160 ? this.isTabTop = true : this.isTabTop = false;
    if (this.platform.is("cordova")) {
      this.isTabTop?this.statusBar.backgroundColorByHexString("#ffffff"):this.statusBar.styleDefault();
    }
    /*    console.log(`ScrollEvent: ${event}`)
        this.zone.run(()=>{
          // since scrollAmount is data-binded,
          // the update needs to happen in zone
          this.scrollAmount++
        })*/
  }

  scrollToTop() {
    this.content.scrollToTop();
  }


  segmentChanged(event) {
    if(this.isTabTop){
      this.content.scrollTo(0,160)
    }

  }

  swipeEvnet(event) {
    if(this.isTabTop){
      this.content.scrollTo(0,160)
    }
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

  imageTapped(post) {
    this.navCtrl.push('ViewImgPage')
    /*    this.appService.toast('点击图片');*/
  }

  comment(post) {
    this.appService.toast('评论');
  }

  like(post) {
    this.appService.toast('喜欢');
  }

}
