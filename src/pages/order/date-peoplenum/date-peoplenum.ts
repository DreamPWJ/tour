import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatePeoplenumPage');
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
