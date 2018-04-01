import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {AppService} from "../../../providers/util/app.service";

/**
 * Generated class for the DatePeoplenumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-date-peoplenum',
  templateUrl: 'date-peoplenum.html',
})
export class DatePeoplenumPage {
  datePeopleArr=[
    {month:'3月',price:'￥2078起'},{month:'4月',price:'￥2078起'},{month:'5月',price:'￥2278起'},{month:'6月',price:'￥2078起'},
  ];
  datePeopleSeg:string=this.datePeopleArr[0].month;
  calendarList = [
    {date:'',price:'',selectFlg:null},
    {date:'',price:'',selectFlg:null},
    {date:'',price:'',selectFlg:null},
    {date:'',price:'',selectFlg:null},
    {date:'',price:'',selectFlg:null},
    {date:'1',price:'2109',selectFlg:true},
    {date:'2',price:'2280',selectFlg:false},
    {date:'3',price:'2078',selectFlg:false},
    {date:'4',price:'2078',selectFlg:false},
    {date:'5',price:'2280',selectFlg:false},
    {date:'6',price:'2280',selectFlg:false},
    {date:'7',price:'2078',selectFlg:false},
    {date:'8',price:'2078',selectFlg:false},
    {date:'9',price:'2199',selectFlg:false},
    {date:'10',price:'2199',selectFlg:false},
    {date:'11',price:'2199',selectFlg:false},
    {date:'12',price:'2278',selectFlg:false},
    {date:'13',price:'2278',selectFlg:false},
    {date:'14',price:'2278',selectFlg:false},
    {date:'15',price:'2278',selectFlg:false},
    {date:'16',price:'2280',selectFlg:false},
    {date:'17',price:'2280',selectFlg:false},
    {date:'18',price:'2299',selectFlg:false},
    {date:'19',price:'2299',selectFlg:false},
    {date:'20',price:'2299',selectFlg:false},
    {date:'21',price:'2299',selectFlg:false},
    {date:'22',price:'2280',selectFlg:false},
    {date:'23',price:'2280',selectFlg:false},
    {date:'24',price:'2299',selectFlg:false},
    {date:'25',price:'2299',selectFlg:false},
    {date:'26',price:'2299',selectFlg:false},
    {date:'27',price:'2299',selectFlg:false},
    {date:'28',price:'2299',selectFlg:false},
  ];

  chengren:number = 1;//成人
  ertong:number = 0;//儿童
  yinger:number = 0;//婴儿

  constructor(public navCtrl: NavController,public appService: AppService) {
  }

  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewWillEnter(){
    this.appService.loadingHide();
  }
  segmentChanged(){}

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
