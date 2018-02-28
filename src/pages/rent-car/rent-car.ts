import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {AppService} from "../../providers/util/app.service";

/**
 * Generated class for the RentCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rent-car',
  templateUrl: 'rent-car.html',
})
export class RentCarPage {
  @ViewChild(Content) content: Content;
  @ViewChild("slides") slides: Slides;
  slidesLength: number = 0;
  currentIndex: number = 1;
  isTabTop: boolean = false;
  songcheFlg: boolean = false;//送车上门flg
  songcheChoo: number = 2;//送车上门选择
  songche:any = '送车上门';
  huancheFlg: boolean = false;//还车上门flg
  huancheChoo: number = 1;//还车上门选择
  huanche:any = '门店还车';

  jingpinRoad = [
    {img:'assets/imgs/rent-car/rentcar2.png',name:'【云南8日游】',content:'寻觅世外桃源，观昆明·红河·元阳·普者黑·坝美',num:16,price:'2590'},
    {img:'assets/imgs/rent-car/rentcar3.png',name:'【云南8日游】',content:'寻觅世外桃源，观昆明·红河·元阳·普者黑·坝美',num:16,price:'2590'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public appService: AppService) {
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
    this.content.scrollTop >= 150 ? this.isTabTop = true : this.isTabTop = false;

  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  //送车上门flg
  songcheSelect(){
    if(this.songcheFlg){
      this.songcheFlg = false;
    }else{
      this.songcheFlg = true;
    }
  }

  songcheChoose(index:number){
    this.songcheChoo = index;
    if(index == 2){
      this.songche = '送车上门';
    }else{
      this.songche = '门店取车';
    }
  }

  //还车上门flg
  huancheSelect(){
    if(this.huancheFlg){
      this.huancheFlg = false;
    }else{
      this.huancheFlg = true;
    }
  }
  huancheChoose(index:number){
    this.huancheChoo = index;
    if(index == 1){
      this.huanche = '门店还车';
    }else{
      this.huanche = '送车上门';
    }
  }

}
