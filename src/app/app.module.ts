import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { CalendarModule } from "ion2-calendar";
import { ChartsModule } from 'ng2-charts';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AutoCompleteModule } from 'ionic2-auto-complete';

import { MyApp } from './app.component';
import { TrackersPage, PanelPage } from './../pages/trackers/trackers';
import { TrackerDetailPage } from '../pages/tracker-detail/tracker-detail';
import { CreateTrackerPage } from './../pages/create-tracker/create-tracker';
import { CustomtrackerPage } from './../pages/customtracker/customtracker';
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
import { SocialHistoryCategoryPage } from '../pages/social-history-category/social-history-category';
import { SocialHistoryDetailPage } from '../pages/social-history-detail/social-history-detail';
import { DoctorVisitNotesPage } from '../pages/doctor-visit-notes/doctor-visit-notes';
import { DoctorVisitNotesDetailPage } from '../pages/doctor-visit-notes-detail/doctor-visit-notes-detail';
import { MedicationPage } from '../pages/medication/medication';
import { MedicationDetailPage } from '../pages/medication-detail/medication-detail';
import { TestResultsPage } from '../pages/test-results/test-results';
import { DiagnosticProcedurePage } from '../pages/diagnostic-procedure/diagnostic-procedure';
import { DiagnosticProcedureDetailPage } from '../pages/diagnostic-procedure-detail/diagnostic-procedure-detail';
import { LabTestPage } from '../pages/lab-test/lab-test';
import { LabTestDetailPage } from '../pages/lab-test-detail/lab-test-detail';
import { PasswordEditPage } from '../pages/password-edit/password-edit';
import { PasswordResetPage } from '../pages/password-reset/password-reset';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TrackersProvider } from '../providers/trackers/trackers';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { QuestionOptionProvider } from '../providers/question-option/question-option';
import { QuestionControlProvider } from '../providers/question-control/question-control';
import { QuestionProvider } from '../providers/question/question';
import { ContactsProvider } from '../providers/contacts/contacts';
import { AllergyClassificationProvider } from '../providers/allergy-classification/allergy-classification';
import { ImmunizationClassificationProvider } from '../providers/immunization-classification/immunization-classification';
import { UserProvider } from '../providers/user/user';
import { AppointmentProvider } from '../providers/appointment/appointment';
import { SocialHistoryClassificationProvider } from '../providers/social-history-classification/social-history-classification';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HistoryProvider } from '../providers/history/history';
import { DiagnosticProcedureClassificationProvider } from '../providers/diagnostic-procedure-classification/diagnostic-procedure-classification';
import { HealthRecordsProvider } from '../providers/health-records/health-records';
import { EncryptionProvider } from '../providers/encryption/encryption';

import { TileComponent } from '../components/tile/tile';
import { DynamicFormQuestionComponent } from './../components/dynamic-form-question/dynamic-form-question';
import { DynamicFormComponent } from './../components/dynamic-form/dynamic-form';
import { CalendarComponent } from './../components/calendar/calendar';

import * as moment from 'moment';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SearchFilterProvider } from '../providers/search-filter/search-filter';

@NgModule({
  declarations: [
    MyApp,
    TrackersPage,
    TrackerDetailPage,
    PanelPage,
    CreateTrackerPage,
    CustomtrackerPage,
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
    SocialHistoryCategoryPage,
    SocialHistoryDetailPage,
    DoctorVisitNotesPage,
    DoctorVisitNotesDetailPage,
    MedicationPage,
    MedicationDetailPage,
    TestResultsPage,
    DiagnosticProcedurePage,
    DiagnosticProcedureDetailPage,
    LabTestPage,
    LabTestDetailPage,
    PasswordEditPage,
    PasswordResetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    CalendarModule,
    ChartsModule,
    AutoCompleteModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrackersPage,
    TrackerDetailPage,
    PanelPage,
    CreateTrackerPage,
    CustomtrackerPage,
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
    SocialHistoryCategoryPage,
    SocialHistoryDetailPage,
    DoctorVisitNotesPage,
    DoctorVisitNotesDetailPage,
    MedicationPage,
    MedicationDetailPage,
    TestResultsPage,
    DiagnosticProcedurePage,
    DiagnosticProcedureDetailPage,
    LabTestPage,
    LabTestDetailPage,
    PasswordEditPage,
    PasswordResetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TrackersProvider,
    ProcessHttpmsgProvider,
    AllergyClassificationProvider,
    ImmunizationClassificationProvider,
    QuestionControlProvider,
    QuestionProvider,
    ContactsProvider,
    QuestionOptionProvider,
    UserProvider,
    AppointmentProvider,
    SocialHistoryClassificationProvider,
    AuthServiceProvider,
    HistoryProvider,
    DiagnosticProcedureClassificationProvider,
    HealthRecordsProvider,
    InAppBrowser,
    EncryptionProvider,
    SearchFilterProvider
  ]
})
export class AppModule { }
