import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Config, IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppService} from "../providers/util/app.service";
import {HardwareBackButtonProvider} from "../providers/native/back-button.provider";
import {IOSCustomTransition} from "../shared/IOSCustomTransition";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios', //android 是 md
      tabsHideOnSubPages: true,//隐藏全部子页面tabs
      backButtonText: '',
      spinner: 'crescent'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    AppService,
    StatusBar,
    SplashScreen,
    HardwareBackButtonProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(public config: Config) {

    this.config.setTransition('ios-transition', IOSCustomTransition);
  }
}
