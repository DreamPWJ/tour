import {ErrorHandler, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Config, IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppService} from "../providers/util/app.service";
import {HardwareBackButtonProvider} from "../providers/native/back-button.provider";
import {CityProvider} from "../providers/util/city.provider";
import {SelfTourPage} from "../pages/self-tour/self-tour";
import {RankingListPage} from "../pages/ranking-list/ranking-list";
import {MyProfilePage} from "../pages/account/my-profile/my-profile";
import {DirectivesModule} from "../directives/directives.module";
import {CalendarModule} from "ion2-calendar/dist";

export const COMPONENTS = [
  MyApp,
  HomePage,
  SelfTourPage,
  RankingListPage,
  MyProfilePage
]

export const MODULES = [
  DirectivesModule,
  CalendarModule
]

export const PROVIDERS = [
  AppService,
  CityProvider,
  HardwareBackButtonProvider,
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios', //android 是 md
      tabsHideOnSubPages: true,//隐藏全部子页面tabs
      backButtonText: '',
      spinner: 'crescent',
      monthShortNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    }

    ),
    MODULES
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    COMPONENTS
  ],
  providers: [
    PROVIDERS,
    StatusBar,
    SplashScreen,
    {provide: LOCALE_ID, useValue: "zh-CN" },//本地化
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})


export class AppModule {
  constructor(public config: Config) {

    /*    this.config.setTransition('ios-transition', IOSCustomTransition);*/
  }
}
