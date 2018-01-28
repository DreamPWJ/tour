import {Component} from '@angular/core';
import {App, IonicApp, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HardwareBackButtonProvider} from "../providers/native/back-button.provider";
import {HomePage} from "../pages/home/home";

declare const screen: any;     //定义全局变量

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, ionicApp: IonicApp, app: App, hardwareBackButtonProvider: HardwareBackButtonProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      /*      if (platform.is('ios')) {
              statusBar.styleDefault();
              /!*          statusBar.styleLightContent();*!/
            } else if (platform.is('android')) {
      /!*        statusBar.styleBlackTranslucent();*!/
              statusBar.styleLightContent();
            }*/
/*      setTimeout(() => {*/
        splashScreen.hide();
  /*    }, 500);*/

      //cordova APP
      if (platform.is("cordova")) {
        //锁定到主竖屏
        screen.orientation.lock('portrait-primary');
        //注册返回按键事件
        hardwareBackButtonProvider.registerBackButtonAction(ionicApp);
      }


/*      app.viewDidLoad.subscribe(()=>{

      });*/

    });
  }



  ngAfterViewInit() {
/*    console.log(666666);*/
    // Let's navigate from TabsPage to Page1
    /*    this.nav.push(LoginPage);*/
  }
}
