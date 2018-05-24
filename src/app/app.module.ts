import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { NgxEchartsModule } from 'ngx-echarts';
import { CalendarModule } from "ion2-calendar";
import { CallNumber } from '@ionic-native/call-number';

import { MyApp } from './app.component';
import { TrackersPage } from './../pages/trackers/trackers';
import { MedicalrecordPage } from './../pages/medicalrecord/medicalrecord';
import { FoodtrackerPage } from './../pages/foodtracker/foodtracker';
import { CustomPanelPage } from './../pages/custom-panel/custom-panel';
import { AlcoholtrackerPage } from './../pages/alcoholtracker/alcoholtracker';
import { CreateTrackerPage } from './../pages/create-tracker/create-tracker';
import { CustomtrackerPage } from './../pages/customtracker/customtracker';
import { MedicalRecordDetailPage } from './../pages/medical-record-detail/medical-record-detail';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ContactPage } from './../pages/contact/contact';
import { ContactDetailPage } from './../pages/contact-detail/contact-detail';
import { ContactAddContactsPage } from '../pages/contact-add-contacts/contact-add-contacts';
import { AppointmentPage } from './../pages/appointment/appointment';
import { AppointmentAddAppointmentsPage } from '../pages/appointment-add-appointments/appointment-add-appointments';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileEditablePage } from '../pages/profile-editable/profile-editable';
import { ResourcesPage } from '../pages/resources/resources';
import { AllergyPage } from './../pages/allergy/allergy';
import { AllergyDetailPage } from '../pages/allergy-detail/allergy-detail';
import { AllergyHistoryPage } from '../pages/allergy-history/allergy-history';
import { FamilyHistoryPage } from '../pages/family-history/family-history';
import { FamilyHistoryDetailPage } from '../pages/family-history-detail/family-history-detail';
import { MedicalHistoryPage } from '../pages/medical-history/medical-history';
import { MedicalHistoryDetailPage } from '../pages/medical-history-detail/medical-history-detail';
import { SurgicalHistoryPage } from '../pages/surgical-history/surgical-history';
import { SurgicalHistoryDetailPage } from '../pages/surgical-history-detail/surgical-history-detail';
import { ImmunizationPage } from './../pages/immunization/immunization';
import { ImmunizationDetailPage } from './../pages/immunization-detail/immunization-detail';
import { ImmunizationHistoryPage } from './../pages/immunization-history/immunization-history';
import { SocialHistoryPage } from '../pages/social-history/social-history';
import { DoctorVisitNotesPage } from '../pages/doctor-visit-notes/doctor-visit-notes';
import { DoctorVisitNotesDetailPage } from '../pages/doctor-visit-notes-detail/doctor-visit-notes-detail';
import { MedicationPage } from '../pages/medication/medication';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TrackersProvider } from '../providers/trackers/trackers';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { MedicalClassificationProvider } from '../providers/medical-classification/medical-classification';
import { AllergyClassificationProvider } from '../providers/allergy-classification/allergy-classification';
import { ImmunizationClassificationProvider } from '../providers/immunization-classification/immunization-classification';

import { QuestionOptionProvider } from '../providers/question-option/question-option';
import { QuestionControlProvider } from '../providers/question-control/question-control';
import { QuestionProvider } from '../providers/question/question';
import { ContactsProvider } from '../providers/contacts/contacts';

import { TileComponent } from '../components/tile/tile';
import { DynamicFormQuestionComponent } from './../components/dynamic-form-question/dynamic-form-question';
import { DynamicFormComponent } from './../components/dynamic-form/dynamic-form';
import { CalendarComponent } from './../components/calendar/calendar';
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    TrackersPage,
    MedicalrecordPage,
    FoodtrackerPage,
    CustomPanelPage,
    AlcoholtrackerPage,
    CreateTrackerPage,
    CustomtrackerPage,
    MedicalRecordDetailPage,
    TileComponent,
    DashboardPage,
    AllergyPage,
    AllergyDetailPage,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    WelcomePage,
    LoginPage,
    SignupPage,
    ContactPage,
    ContactDetailPage,
    ContactAddContactsPage,
    AppointmentPage,
    AppointmentAddAppointmentsPage,
    CalendarComponent,
    ProfilePage,
    ProfileEditablePage,
    ResourcesPage,
    AllergyHistoryPage,
    FamilyHistoryPage,
    FamilyHistoryDetailPage,
    MedicalHistoryPage,
    MedicalHistoryDetailPage,
    SurgicalHistoryPage,
    SurgicalHistoryDetailPage,
    ImmunizationPage,
    ImmunizationHistoryPage,
    ImmunizationDetailPage,
    SocialHistoryPage,
    DoctorVisitNotesPage,
    DoctorVisitNotesDetailPage,
    MedicationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    NgxEchartsModule,
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrackersPage,
    MedicalrecordPage,
    FoodtrackerPage,
    CustomPanelPage,
    AlcoholtrackerPage,
    CreateTrackerPage,
    CustomtrackerPage,
    MedicalRecordDetailPage,
    DashboardPage,
    AllergyPage,
    AllergyDetailPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    ContactPage,
    ContactDetailPage,
    ContactAddContactsPage,
    AppointmentPage,
    AppointmentAddAppointmentsPage,
    ProfilePage,
    ProfileEditablePage,
    ResourcesPage,
    AllergyHistoryPage,
    FamilyHistoryPage,
    FamilyHistoryDetailPage,
    MedicalHistoryPage,
    MedicalHistoryDetailPage,
    SurgicalHistoryPage,
    SurgicalHistoryDetailPage,
    ImmunizationPage,
    ImmunizationHistoryPage,
    ImmunizationDetailPage,
    SocialHistoryPage,
    DoctorVisitNotesPage,
    DoctorVisitNotesDetailPage,
    MedicationPage
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
    QuestionProvider,
    CallNumber,
    ContactsProvider,
    QuestionOptionProvider,
    UserProvider
  ]
})
export class AppModule {}
