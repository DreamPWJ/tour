import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the WriteCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-write-check',
  templateUrl: 'write-check.html',
})
export class WriteCheckPage {
  checkMessage:string = '';

  constructor(public navCtrl: NavController, private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WriteCheckPage');
  }

  checkAlert() {
    let alert = this.alertCtrl.create();
    alert.setCssClass('check-alert');
    alert.setTitle('发票抬头');

    alert.addInput({
      type: 'radio',
      label: '公司',
      value: '公司',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: '个人',
      value: '个人'
    });

    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        this.checkMessage = data;
      }
    });
    alert.present();
  }
}
