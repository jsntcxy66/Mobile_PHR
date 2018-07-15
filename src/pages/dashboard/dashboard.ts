import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AppointmentPage } from '../appointment/appointment';
import { LabTestDetailPage } from '../lab-test-detail/lab-test-detail';
import { MedicationPage } from '../medication/medication';
import { ImmunizationHistoryPage } from '../immunization-history/immunization-history';
import { WelcomePage } from '../welcome/welcome';
import { DoctorVisitNotesPage } from '../doctor-visit-notes/doctor-visit-notes';
import { AppointmentProvider } from '../../providers/appointment/appointment';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HealthRecordsProvider } from '../../providers/health-records/health-records';

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
  medications: any[] = [];
  immunizations: any[] = [];
  dvnotes: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private ap: AppointmentProvider,
    private hrp: HealthRecordsProvider,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

  }

  ionViewCanEnter() {
    this.ap.getAppointment(this.auth.userId)
      .subscribe(app => {
        this.appointments = app;
      },
        errmess => this.errMess = <any>errmess);

    this.hrp.getRecentLabTest(this.auth.userId, 30)
      .subscribe(records => {
        this.labtests = records;
      },
        errmess => this.errMess = <any>errmess);

    this.hrp.getMedication(this.auth.userId)
      .subscribe(records => {
        this.medications = records;
      },
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
      .subscribe(records => {
        this.dvnotes = records;
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
    this.navCtrl.push(LabTestDetailPage, {
      'title': this.labtests[i].name,
      'id': this.labtests[i].id,
      'isnumber': this.labtests[i].isnumber,
      'unit': this.labtests[i].unit,
      'tab': 'history'
    });
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

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      this.ap.getAppointment(this.auth.userId)
        .subscribe(app => this.appointments = app,
          errmess => this.errMess = <any>errmess);

      this.hrp.getRecentLabTest(this.auth.userId, 30)
        .subscribe(records => this.labtests = records,
          errmess => this.errMess = <any>errmess);

      this.hrp.getMedication(this.auth.userId)
        .subscribe(records => this.medications = records,
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
        .subscribe(records => this.dvnotes = records,
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
