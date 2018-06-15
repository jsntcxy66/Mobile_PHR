import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AppointmentPage } from '../appointment/appointment';
import { LabTestDetailPage } from '../lab-test-detail/lab-test-detail';
import { MedicationPage } from '../medication/medication';
import { ImmunizationHistoryPage } from '../immunization-history/immunization-history';
import { AppointmentProvider } from '../../providers/appointment/appointment';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';
import { ImmunizationProvider } from '../../providers/immunization/immunization';
import { MedicationProvider } from '../../providers/medication/medication';
import { TestResultsProvider } from '../../providers/test-results/test-results';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private ap: AppointmentProvider,
    private ip: ImmunizationProvider,
    private medicationProvider: MedicationProvider,
    private trp: TestResultsProvider,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    this.labtests = [
      {
        id: 2,
        name: "BMP (Basic Metabolic Panel)",
        unit: "mg/dL",
        isnumber: true,
        subtest: "BMP (Basic Metabolic Panel)",
        result: '22',
        abnormal: true,
        note: 'XDXDXDXDXDXD',
        date: '2011-12-02T17:57:28.556094Z'
      },
      {
        id: 2,
        name: "BMP (Basic Metabolic Panel)",
        unit: "mg/dL",
        isnumber: true,
        subtest: "BMP (Basic Metabolic Panel)",
        result: '22',
        abnormal: true,
        note: 'XDXDXDXDXDXD',
        date: '2011-12-02T17:57:28.556094Z'
      }
    ];

    this.medications = [
      {
        name: 'Aspirin',
        frequency: 'Take 1 with food',
        date: '2018/02/08'
      },
      {
        name: 'Lyrica',
        frequency: '75mg, Take 1 with food',
        date: '2018/04/03'
      }
    ];

    this.immunizations = [
      {
        vaccine: 'MMR',
        schedule: '1 or 2 doses depending on indication',
        ageGroup: 'Adult',
        date: '2018/02/08',
        age: 30
      },
      {
        vaccine: 'Influenza',
        schedule: 'Annual vaccination (IIV) 1 or 2 doses',
        ageGroup: 'Child and Adolescent',
        date: '2018/04/15',
        age: 12
      }
    ];

    this.ap.getAppointment(this.auth.userId)
      .subscribe(app => this.appointments = app,
        errmess => this.errMess = <any>errmess);

    this.trp.getRecentLabTest(this.auth.userId)
      .subscribe(records => this.labtests = records,
        errmess => this.errMess = <any>errmess);

    this.medicationProvider.getRecords(this.auth.userId)
      .subscribe(records => this.medications = records,
        errmess => this.errMess = <any>errmess);

    this.ip.getRecords(this.auth.userId)
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
