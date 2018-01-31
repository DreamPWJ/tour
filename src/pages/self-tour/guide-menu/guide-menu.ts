import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GuideMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guide-menu',
  templateUrl: 'guide-menu.html',
})
export class GuideMenuPage {
  public menuFlg:boolean = true;//侧边栏显示隐藏
  public indexSel:number = 1;//侧边栏选择

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //侧边栏显示隐藏
  menuSelect(flg:boolean){
    this.menuFlg = flg;
  }

  //侧边栏选择
  indexSelect(index:number){
    this.indexSel = index;
  }

  gaikuangList =[
    {name:'西藏速览'},
    {name:'行前提示'},
    {name:'建议旅行天数'},
    {name:'最佳旅行时间'},
    {name:'消费水平'},
    {name:'行前提示'},
  ];
  zhunbeiList = [
    {name:'穿衣指南',flg:false},
    {name:'旅行装备',flg:false},
    {name:'高原反应',flg:true},
    {name:'边防证',flg:false},
    {name:'网络通信',flg:false},
    {name:'银行',flg:false},
  ];
  gouwuList = [
    {name:'特色商品'},
    {name:'阿里购物攻略'},
    {name:'日客则购物攻略'},
    {name:'拉萨购物攻略'},
    {name:'那曲购物攻略'},
  ];
  jiaotongList = [
    {name:'交通工具概述'},
    {name:'飞机'},
    {name:'火车'},
    {name:'自驾'},
  ];
}
