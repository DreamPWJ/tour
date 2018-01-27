import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Config, IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppService} from "../providers/util/app.service";
import {HardwareBackButtonProvider} from "../providers/native/back-button.provider";
import {CityProvider} from "../providers/cityprovider";
import {SelfTourPage} from "../pages/self-tour/self-tour";
import {RankingListPage} from "../pages/ranking-list/ranking-list";
import {MyProfilePage} from "../pages/account/my-profile/my-profile";
import {DirectivesModule} from "../directives/directives.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelfTourPage,
    RankingListPage,
    MyProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios', //android 是 md
      tabsHideOnSubPages: true,//隐藏全部子页面tabs
      backButtonText: '',
      spinner: 'crescent'
    }),
    DirectivesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelfTourPage,
    RankingListPage,
    MyProfilePage
  ],
  providers: [
    AppService,
    CityProvider,
    StatusBar,
    SplashScreen,
    HardwareBackButtonProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(public config: Config) {

/*    this.config.setTransition('ios-transition', IOSCustomTransition);*/
  }
}
