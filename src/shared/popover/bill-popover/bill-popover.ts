import { Component } from '@angular/core';
import {IonicPage, ViewController} from "ionic-angular";

/**
 * 菜单选择
 *
 */
@IonicPage()
@Component({
  selector: 'bill-popover',
  template: `<ion-list>
  <button detail-none ion-item (click)="select(item.id)" *ngFor="let item of billTypes"><ion-icon class="{{item.icon}}"></ion-icon> {{item.value}}</button>
</ion-list>`
})
export class BillPopover {
  billTypes:any[]=[

    {id:'1',icon:"icon-form",value:'我的订单'},
    {id:'2',icon:"icon-message",value:'消息'},
    {id:'3',icon:"icon-share",value:'分享'},
    {id:'4',icon:"icon-home",value:'首页'},
    {id:'5',icon:"icon-phone",value:'客服中心'},

  ]

  constructor(public viewCtrl: ViewController) {

  }

  select(type:number) {
    this.viewCtrl.dismiss({type:type});
  }
}
