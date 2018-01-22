import {Component, ViewChild} from '@angular/core';
import { Content,IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService} from "../../../providers/util/app.service";

/**
 * Generated class for the RoadlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roadlist',
  templateUrl: 'roadlist.html',
})
export class RoadlistPage {
  @ViewChild(Content) content: Content;
  roadsegArr:string[]=[ '全部','当季' ,'热门','朝圣','亲子','拓展','摄影' ];
  roadseg:string=this.roadsegArr[0];

  roadList = [
    {
      roadImageUrl: 'assets/imgs/self-tour/roadlist1.png',
      title: `拉萨一日游`,
      content: `西藏人气打卡景点•羊卓雍错/羊湖专线一日游 (精品纯玩+含观景门票+商务车座位)`,
      ticket: `拉萨/6809已购`,
      price:`￥885`
    },
    {
      roadImageUrl: 'assets/imgs/self-tour/roadlist2.png',
      title: `拉萨多日游`,
      content: `西藏珠峰环线5日游•珠穆朗玛峰/纳木错/扎什伦布寺/羊湖/卡若拉冰川(包办边防证)`,
      ticket: `拉萨/1298已购`,
      price:`￥2150`
    },
    {
      roadImageUrl: 'assets/imgs/self-tour/roadlist3.png',
      title: `拉萨景点门票`,
      content: `雪域圣殿•布达拉宫游学之旅 (上午参观+体验藏式朝拜+蓝牙耳机免费使用+在藏期间全程服务)`,
      ticket: `拉萨/3151已购`,
      price:`￥885`
    },
    {
      roadImageUrl: 'assets/imgs/self-tour/roadlist3.png',
      title: `拉萨景点门票`,
      content: `雪域圣殿•布达拉宫游学之旅 (上午参观+体验藏式朝拜+蓝牙耳机免费使用+在藏期间全程服务)`,
      ticket: `拉萨/3151已购`,
      price:`￥885`
    },
    {
      roadImageUrl: 'assets/imgs/self-tour/roadlist3.png',
      title: `拉萨景点门票`,
      content: `雪域圣殿•布达拉宫游学之旅 (上午参观+体验藏式朝拜+蓝牙耳机免费使用+在藏期间全程服务)`,
      ticket: `拉萨/3151已购`,
      price:`￥885`
    },
    {
      roadImageUrl: 'assets/imgs/self-tour/roadlist3.png',
      title: `拉萨景点门票`,
      content: `雪域圣殿•布达拉宫游学之旅 (上午参观+体验藏式朝拜+蓝牙耳机免费使用+在藏期间全程服务)`,
      ticket: `拉萨/3151已购`,
      price:`￥885`
    },
  ];

  //搜索
  filterItems(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() !== '') {
      this.roadList = this.roadList.filter(function(item) {
        console.log(item.title.includes(val));
        return true;
      });
    }
  }

  segmentChanged(event){}
  scrollToTop() {
    this.content.scrollToTop();
  }

  swipeEvnet(event) {
    //向左滑
    if (event.direction == 2) {
      if (this.roadsegArr.indexOf(this.roadseg) < 7) {
        this.roadseg = this.roadsegArr[this.roadsegArr.indexOf(this.roadseg) + 1];
      }
    }
    //向右滑
    if (event.direction == 4) {
      if (this.roadsegArr.indexOf(this.roadseg) > 0) {
        this.roadseg = this.roadsegArr[this.roadsegArr.indexOf(this.roadseg) - 1];
      }
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoadlistPage');
  }

}
