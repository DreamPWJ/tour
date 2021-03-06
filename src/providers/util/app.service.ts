import {Injectable} from '@angular/core';
import {AlertController, LoadingController, Platform, Toast, ToastController} from 'ionic-angular';
import {App, NavController} from "ionic-angular/index";
import 'rxjs/add/operator/toPromise';

declare  let startApp;
declare  let appAvailability;

@Injectable()
export class AppGlobal {

  //接口域名地址
  static domain = "https://tlimama.tongedev.cn"

  //接口地址
  static API: any = {};

  //APP版本号
  static versionNumber: string = '1.0.0';

  //高德web API服务key
  static gaoDeKey: any = "972cafdc2472d8f779c5274db770ac22"

  // 验证码倒计时参数
  static verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 60,
    disable: true
  }

}

@Injectable()
export class AppService {
  public nav: NavController;
  public toasts: Toast;
  public loading:any;
  constructor(private app: App, public loadingCtrl: LoadingController, private alertCtrl: AlertController, private toastCtrl: ToastController,private  platform:Platform) {
    this.nav = this.app.getActiveNav();
  }

  alert(title, message) {
    const alert = this.alertCtrl.create({
      cssClass: 'alert',
      title: title,
      message: message,
      buttons: ["确定"]
    });
    alert.present();
  }


  confirm(title, message, callback?, confirmText = '确定', cancelText = '取消', callbackCancel?) {
    const alert = this.alertCtrl.create({
      cssClass: 'confirm',
      title: title,
      message: message,
      buttons: [{
        text: cancelText,
        handler: () => {
          if (callbackCancel) {
            callbackCancel();
          }
          console.log(cancelText);
        }
      }, {
        text: confirmText,
        handler: data => {
          if (callback) {
            callback();
          }
        }
      }]
    });
    alert.present();
  }

  toast(message, callback?, cssClass = 'toast', position = 'bottom', ok = false, duration = 2000) {
    if (this.toasts) {
      this.toasts.dismiss();
    }
    this.toasts = this.toastCtrl.create({
      cssClass: cssClass,
      message: message,
      position: position,//top, bottom and middle
      duration: ok ? null : duration,
      showCloseButton: ok,
      dismissOnPageChange: false,//	Whether to dismiss the toast when navigating to a new page.
      closeButtonText: '确定'
    });
    this.toasts.present();
    if (callback) {
      callback();
    }
  }

  loadingShow(content?:string){
    this.loading = this.loadingCtrl.create({
      content: content
    });
    this.loading.present();
  }

  loadingHide(){
    this.loading.dismiss();
  }

  setItem(key: string, obj: any) {
    try {
      var json = JSON.stringify(obj);
      window.localStorage[key] = json;
    }
    catch (e) {
      console.error("window.localStorage error:" + e);
    }
  }

  getItem(key: string, callback) {
    try {
      var json = window.localStorage[key];
      var obj = JSON.parse(json);
      callback(obj);
    }
    catch (e) {
      console.error("window.localStorage error:" + e);
    }
  }

  /**
   * 是否登录提示
   */
  isLogin(isShow: boolean = false) {
    this.nav = this.app.getActiveNav();
    if (!localStorage.getItem("userid")) {
      if (isShow) {
        this.confirm("登录", "登录体验更完善功能", () => {
          this.nav.push('LoginPage')
        }, "登录", "暂不登录", () => {
          this.nav.pop();
        })
      } else {
        this.nav.push('LoginPage')
      }
      return false;
    } else {
      return true;
    }
  }


  /**
   *  验证码倒计时
   */
  getVerifyCode(verifyCode: any) {
    //发送验证码成功后开始倒计时
    verifyCode.disable = false;
    if (verifyCode.countdown == 1) {
      verifyCode.countdown = 60;
      verifyCode.verifyCodeTips = "获取验证码";
      verifyCode.disable = true;
      return;
    } else {
      verifyCode.countdown--;
      verifyCode.verifyCodeTips = verifyCode.countdown + "秒后重试";
    }

    setTimeout(() => {
      this.getVerifyCode(verifyCode);
    }, 1000);
  }

  /**
   * 打开百度地图APP
   */
  openBaiDuMap() {
    let scheme;
    let sApp;
    if (this.platform.is('ios')) {
      scheme = 'baidu://';
    } else if (this.platform.is('android')) {
      scheme = 'com.baidu.BaiduMap';
    }

    appAvailability.check(
      scheme,       // URI Scheme or Package Name
      () =>{  // Success callback
        if (this.platform.is('ios')) {

          sApp = startApp.set("baidumap://");
          sApp.start(()=> { /* success */

          }, (error)=> { /* fail */

          });
        } else if (this.platform.is('android')) {

          sApp = startApp.set({ /* params */
            "action":"ACTION_VIEW",
            "category":"CATEGORY_DEFAULT",
            "type":"text/css",
            "package":"com.baidu.BaiduMap",
            "uri":"baidumap://map/direction?origin=我的位置&destination=成都大学&mode=driving&region=成都",
            "flags":["FLAG_ACTIVITY_CLEAR_TOP","FLAG_ACTIVITY_CLEAR_TASK"],
            // "component": ["com.android.GoBallistic","com.android.GoBallistic.Activity"],
            "intentstart":"startActivity",
          }, { /* extras */
            "EXTRA_STREAM":"extraValue1",
            "extraKey2":"extraValue2"
          });
          sApp.start(() => { /* success */

          }, (error) => { /* fail */

          });
        }


      },
      () =>{  // Error callback
        this.toast("百度地图未安装,请先安装APP")
        if (this.platform.is('ios')) {
          window.open("https://itunes.apple.com/cn/app/id452186370")
        } else if (this.platform.is('android')) {
          window.open("http://map.baidu.com/zt/client/index/")
        }
      }
    );
  }
}
