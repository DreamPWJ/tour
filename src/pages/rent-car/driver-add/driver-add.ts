import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CameraProvider} from "../../../providers/native/camera";

/**
 * 新增驾驶员
 */

@IonicPage()
@Component({
  selector: 'page-driver-add',
  templateUrl: 'driver-add.html',
})
export class DriverAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: CameraProvider) {
  }

  ionViewDidLoad() {

  }

  upload() {
    this.camera.cameraActionSheet();
  }
}
