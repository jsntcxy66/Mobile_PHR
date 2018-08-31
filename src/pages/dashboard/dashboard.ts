import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AppointmentPage } from '../appointment/appointment';
import { LabTestDetailPage } from '../lab-test-detail/lab-test-detail';
import { DiagnosticProcedureDetailPage } from './../diagnostic-procedure-detail/diagnostic-procedure-detail';
import { MedicationPage } from '../medication/medication';
import { ImmunizationHistoryPage } from '../immunization-history/immunization-history';
import { WelcomePage } from '../welcome/welcome';
import { DoctorVisitNotesPage } from '../doctor-visit-notes/doctor-visit-notes';
import { SocialHistoryPage } from './../social-history/social-history';
import { FamilyHistoryPage } from './../family-history/family-history';
import { SurgicalHistoryPage } from './../surgical-history/surgical-history';
import { AllergyHistoryPage } from './../allergy-history/allergy-history';
import { MedicalHistoryPage } from './../medical-history/medical-history';
import { AppointmentProvider } from '../../providers/appointment/appointment';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HealthRecordsProvider } from '../../providers/health-records/health-records';
import { HistoryProvider } from './../../providers/history/history';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  errMess: string;
  appointments: any[] = [];
  labtests: any[] = [];
  dp: any[] = [];
  dpName: string[] = ["ECG", "X-Ray", "CT Scan", "MRI", "Ultrasound", "Sleep Study", "Pulmonary Function Tests", "Miscellaneous"];
  medications: any[] = [];
  immunizations: any[] = [];
  dvnotes: any[] = [];
  allergy: any[] = [];
  medical: any[] = [];
  social: any[] = [];
  surgical: any[] = [];
  family: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private ap: AppointmentProvider,
    private hrp: HealthRecordsProvider,
    private hp: HistoryProvider,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

  }

  ionViewCanEnter() {
    this.ap.getAppointment(this.auth.userId)
      .subscribe(app => { this.appointments = app; },
        errmess => this.errMess = <any>errmess);

    this.hrp.getRecentLabTest(this.auth.userId, 30)
      .subscribe(records => {
        this.labtests = [];
        records.forEach(record => {
          if (record.abnormal == true) {
            this.labtests.push(record);
          }
        });
      },
        errmess => this.errMess = <any>errmess);

    this.hrp.getRecentDiagnosticProcedure(this.auth.userId, 30)
      .subscribe(records => { this.dp = records; console.log(this.dp);},
        errmess => this.errMess = <any>errmess);

    this.hrp.getMedication(this.auth.userId)
      .subscribe(records => { this.medications = records; },
        errmess => this.errMess = <any>errmess);

    this.hrp.getImmunization(this.auth.userId)
      .subscribe(records => {
        this.immunizations = records;
        this.immunizations.forEach(immunization => {
          if (immunization.age > 18)
            immunization['ageGroup'] = "Adult";
          else
            immunization['ageGroup'] = "Child and Adolescent";
        });
      },
        errmess => this.errMess = <any>errmess);

    this.hrp.getDoctorVisitNotes(this.auth.userId)
      .subscribe(records => { this.dvnotes = records; },
        errmess => this.errMess = <any>errmess);

    this.hp.getRecentHistory(this.auth.userId, 30)
      .subscribe(records => {
        this.allergy = [];
        this.medical = [];
        this.social = [];
        this.surgical = [];
        this.family = [];
        console.log(records);
        records.forEach(record => {
          if (record.historytype == "allergy") {
            this.allergy.push(record);
          } else if (record.historytype == "medical") {
            this.medical.push(record);
          } else if (record.historytype == "social") {
            this.social.push(record);
          } else if (record.historytype == "surgical") {
            this.surgical.push(record);
          } else if (record.historytype == "family") {
            this.family.push(record);
          }
        });
      },
        errmess => this.errMess = <any>errmess);

    return true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  goToAppointment() {
    this.navCtrl.push(AppointmentPage);
  }

  goToLabtest(i) {
    console.log(this.labtests[i]);
    this.navCtrl.push(LabTestDetailPage, {
      'title': this.labtests[i].testname,
      'id': this.labtests[i].testid,
    });
  }

  goToDiagnosticProcedure(j) {
    this.navCtrl.push(DiagnosticProcedureDetailPage, {
      'title': this.dpName[this.dp[j].typeid - 1],
      'id': this.dp[j].typeid
    })
  }

  goToMedication() {
    this.navCtrl.push(MedicationPage);
  }

  goToImmunization() {
    this.navCtrl.push(ImmunizationHistoryPage);
  }

  goToDoctorVisitNotes() {
    this.navCtrl.push(DoctorVisitNotesPage);
  }

  goToAllergy() {
    this.navCtrl.push(AllergyHistoryPage);
  }

  goToMedical() {
    this.navCtrl.push(MedicalHistoryPage);
  }

  goToSocial() {
    this.navCtrl.push(SocialHistoryPage);
  }

  goToSurgical() {
    this.navCtrl.push(SurgicalHistoryPage);
  }

  goToFamily() {
    this.navCtrl.push(FamilyHistoryPage);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      this.ap.getAppointment(this.auth.userId)
        .subscribe(app => { this.appointments = app; },
          errmess => this.errMess = <any>errmess);

      this.hrp.getRecentLabTest(this.auth.userId, 30)
        .subscribe(records => {
          this.labtests = [];
          records.forEach(record => {
            if (record.abnormal == true) {
              this.labtests.push(record);
            }
          });
        },
          errmess => this.errMess = <any>errmess);

      this.hrp.getRecentDiagnosticProcedure(this.auth.userId, 30)
        .subscribe(records => { this.dp = records; },
          errmess => this.errMess = <any>errmess);

      this.hrp.getMedication(this.auth.userId)
        .subscribe(records => { this.medications = records; },
          errmess => this.errMess = <any>errmess);

      this.hrp.getImmunization(this.auth.userId)
        .subscribe(records => {
          this.immunizations = records;
          this.immunizations.forEach(immunization => {
            if (immunization.age > 18)
              immunization['ageGroup'] = "Adult";
            else
              immunization['ageGroup'] = "Child and Adolescent";
          });
        },
          errmess => this.errMess = <any>errmess);

      this.hrp.getDoctorVisitNotes(this.auth.userId)
        .subscribe(records => { this.dvnotes = records; },
          errmess => this.errMess = <any>errmess);

      this.hp.getRecentHistory(this.auth.userId, 30)
        .subscribe(records => {
          this.allergy = [];
          this.medical = [];
          this.social = [];
          this.surgical = [];
          this.family = [];
          console.log(records);
          records.forEach(record => {
            if (record.historytype == "allergy") {
              this.allergy.push(record);
            } else if (record.historytype == "medical") {
              this.medical.push(record);
            } else if (record.historytype == "social") {
              this.social.push(record);
            } else if (record.historytype == "surgical") {
              this.surgical.push(record);
            } else if (record.historytype == "family") {
              this.family.push(record);
            }
          });
        },
          errmess => this.errMess = <any>errmess);

      console.log('Async operation has ended');
      refresher.complete();
    }, 1500);
  }

  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Oops!',
      message: msg,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.push(WelcomePage);
          }
        }
      ]
    });
    alert.present();
  }
}
