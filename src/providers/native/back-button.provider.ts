import {Injectable} from '@angular/core';
import {App, IonicApp, Keyboard, NavController, Platform} from "ionic-angular";
import {AppService} from "../util/app.service";


/*
  Generated class for the HardwareBackButtonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HardwareBackButtonProvider {
  backButtonPressed: boolean = false;  //用于判断返回键是否触发
  private nav: NavController;

  constructor(public platform: Platform, public app: App, public appService: AppService, private keyboard: Keyboard) {

  }

  /**
   * 注册全局返回事件
   */
  registerBackButtonAction(ionicApp: IonicApp) {
    this.nav = this.app.getActiveNav();
    this.platform.registerBackButtonAction(() => {
      if (this.keyboard.isOpen()) {//如果键盘开启则隐藏键盘
        this.keyboard.close();
        return;
      }
      //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
      // this.ionicApp._toastPortal.getActive() || this.ionicApp._loadingPortal.getActive() || this.ionicApp._overlayPortal.getActive()
      let activePortal = ionicApp._modalPortal.getActive() || ionicApp._loadingPortal.getActive() || ionicApp._overlayPortal.getActive();
      if (activePortal) {
        activePortal.dismiss().catch(() => {
        });
        activePortal.onDidDismiss(() => {
        });
        return;
      }
      return this.nav.canGoBack() ? this.nav.pop() : this.showExit()
    }, 1);
  }


  /**
   * 双击退出提示框
   */
  showExit() {
    if (this.backButtonPressed) { //当触发标志为true时，即2秒内双击返回按键则退出APP
      this.platform.exitApp();
    } else {
      this.appService.toast("再按一次返回退出自驾游应用")
      this.backButtonPressed = true;
      setTimeout(() => this.backButtonPressed = false, 2000);//2秒内没有再次点击返回则将触发标志标记为false
    }
  }
}
