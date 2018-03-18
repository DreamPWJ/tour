import {ChangeDetectorRef, Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddressSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address-select',
  templateUrl: 'address-select.html',
})
export class AddressSelectPage {
  addressList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public cd:ChangeDetectorRef) {
    this.addressList = [
      {index:0,name:'王一天',mobphone:'15208793657',address:'四川省成都市成华区一环路东三段成都科大沙河校区光电大楼702',checked:true},
      {index:1,name:'王一天',mobphone:'15208793657',address:'四川省成都市成华区一环路东三段成都科大沙河校区光电大楼702',checked:false},
      {index:2,name:'王一天',mobphone:'15208793657',address:'四川省成都市成华区一环路东三段成都科大沙河校区光电大楼702',checked:false}
    ];
  }


  //toggle点击
  toggleClick(item){
    this.addressList.map((items,index)=>{
      item.index==index?(items.checked?false:true):items.checked=false;
      this.cd.detectChanges()
    })

  }

}
