import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TrackersPage } from './../pages/trackers/trackers';
import { MedicalrecordPage } from './../pages/medicalrecord/medicalrecord';
import { TestPage } from './../pages/test/test';
import { FoodtrackerPage } from './../pages/foodtracker/foodtracker';
import { CustomPanelPage } from './../pages/custom-panel/custom-panel';
import { WeighttrackerPage } from './../pages/weighttracker/weighttracker';
import { VaccinationtrackerPage } from './../pages/vaccinationtracker/vaccinationtracker';
import { MedicationtrackerPage } from './../pages/medicationtracker/medicationtracker';
import { ExercisetrackerPage } from './../pages/exercisetracker/exercisetracker';
import { AlcoholtrackerPage } from './../pages/alcoholtracker/alcoholtracker';
import { CreateTrackerPage } from './../pages/create-tracker/create-tracker';
import { CustomtrackerPage } from './../pages/customtracker/customtracker';
import { MedicalRecordDetailPage } from './../pages/medical-record-detail/medical-record-detail';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { AllergyPage } from './../pages/allergy/allergy';
import { AllergyDetailPage } from '../pages/allergy-detail/allergy-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TrackersProvider } from '../providers/trackers/trackers';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { MedicalClassificationProvider } from '../providers/medical-classification/medical-classification';
import { AllergyClassificationProvider } from '../providers/allergy-classification/allergy-classification';
import { ImmunizationClassificationProvider } from '../providers/immunization-classification/immunization-classification';

import { TileComponent } from '../components/tile/tile';
import { DynamicFormQuestionComponent } from './../components/dynamic-form-question/dynamic-form-question';
import { DynamicFormComponent } from './../components/dynamic-form/dynamic-form';

import { NgxEchartsModule } from 'ngx-echarts';
import { QuestionControlProvider } from '../providers/question-control/question-control';
import { QuestionProvider } from '../providers/question/question';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TrackersPage,
    MedicalrecordPage,
    TestPage,
    FoodtrackerPage,
    CustomPanelPage,
    WeighttrackerPage,
    VaccinationtrackerPage,
    MedicationtrackerPage,
    ExercisetrackerPage,
    AlcoholtrackerPage,
    CreateTrackerPage,
    CustomtrackerPage,
    MedicalRecordDetailPage,
    TileComponent,
    DashboardPage,
    AllergyPage,
    AllergyDetailPage,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    NgxEchartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TrackersPage,
    MedicalrecordPage,
    TestPage,
    FoodtrackerPage,
    CustomPanelPage,
    WeighttrackerPage,
    VaccinationtrackerPage,
    MedicationtrackerPage,
    ExercisetrackerPage,
    AlcoholtrackerPage,
    CreateTrackerPage,
    CustomtrackerPage,
    MedicalRecordDetailPage,
    DashboardPage,
    AllergyPage,
    AllergyDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TrackersProvider,
    ProcessHttpmsgProvider,
    MedicalClassificationProvider,
    AllergyClassificationProvider,
    ImmunizationClassificationProvider,
    QuestionControlProvider,
    QuestionProvider
  ]
})
export class AppModule {}
