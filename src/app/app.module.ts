import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TrackersPage } from './../pages/trackers/trackers';
import { MedicalrecordPage } from './../pages/medicalrecord/medicalrecord';
import { TestPage } from './../pages/test/test';
import { FoodtrackerPage } from './../pages/foodtracker/foodtracker';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TrackersProvider } from '../providers/trackers/trackers';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TrackersPage,
    MedicalrecordPage,
    TestPage,
    FoodtrackerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TrackersPage,
    MedicalrecordPage,
    TestPage,
    FoodtrackerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TrackersProvider,
    ProcessHttpmsgProvider
  ]
})
export class AppModule {}
