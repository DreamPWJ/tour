import {Component} from '@angular/core';
import {IonicApp, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HardwareBackButtonProvider} from "../providers/native/back-button.provider";
import {HomePage} from "../pages/home/home";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,  ionicApp: IonicApp, hardwareBackButtonProvider: HardwareBackButtonProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (platform.is('ios')) {
        statusBar.styleDefault();
        /*          statusBar.styleLightContent();*/
      } else if (platform.is('android')) {
/*        statusBar.styleBlackTranslucent();*/
        statusBar.styleLightContent();
      }
      setTimeout(()=>{
        splashScreen.hide();
      },800);

      hardwareBackButtonProvider.registerBackButtonAction(ionicApp);//注册返回按键事件
    });
  }

  ngAfterViewInit() {
    // Let's navigate from TabsPage to Page1
/*    this.nav.push(LoginPage);*/
  }
}
