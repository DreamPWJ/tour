import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AppService} from "../../../providers/util/app.service";

/**
 * Generated class for the CarDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-detail',
  templateUrl: 'car-detail.html',
})
export class CarDetailPage {
  cardetailArr:string[]=[ '订车流程','必备材料' ,'租车须知','注意事项'];
  cardetailSeg:string=this.cardetailArr[1];

  calendarList = [
    {date:'',price:'',selectFlg:null},
    {date:'',price:'',selectFlg:null},
    {date:'',price:'',selectFlg:null},
    {date:'',price:'',selectFlg:null},
    {date:'',price:'',selectFlg:null},
    {date:'1',price:'109',selectFlg:true},
    {date:'2',price:'99',selectFlg:false},
    {date:'3',price:'99',selectFlg:false},
    {date:'4',price:'79',selectFlg:false},
    {date:'5',price:'79',selectFlg:false},
    {date:'6',price:'79',selectFlg:false},
    {date:'7',price:'99',selectFlg:false},
    {date:'8',price:'99',selectFlg:false},
    {date:'9',price:'109',selectFlg:false},
    {date:'10',price:'79',selectFlg:false},
    {date:'11',price:'89',selectFlg:false},
    {date:'12',price:'79',selectFlg:false},
    {date:'13',price:'79',selectFlg:false},
    {date:'14',price:'79',selectFlg:false},
    {date:'15',price:'79',selectFlg:false},
    {date:'16',price:'99',selectFlg:false},
    {date:'17',price:'99',selectFlg:false},
    {date:'18',price:'99',selectFlg:false}
  ];

  constructor(public navCtrl: NavController, public appService: AppService) {
  }

  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewWillEnter(){
    this.appService.loadingHide();
  }

  segmentChanged(event){}

  //日历选择
  calendarCli(date){
    if(date!=''){
      for (let i = 0; i < this.calendarList.length; i++) {
        if(this.calendarList[i].date == date){
          this.calendarList[i].selectFlg = !this.calendarList[i].selectFlg;
        }
      }
    }
  }
}
