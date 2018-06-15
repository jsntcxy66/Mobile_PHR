import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AppointmentPage } from '../appointment/appointment';
import { LabTestDetailPage } from '../lab-test-detail/lab-test-detail';
import { MedicationPage } from '../medication/medication';
import { ImmunizationHistoryPage } from '../immunization-history/immunization-history';
import { AppointmentProvider } from '../../providers/appointment/appointment';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';

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
  appointments: any[];
  labtests: any[];
  medications: any[];
  immunizations: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private ap: AppointmentProvider,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    // this.appointments = [
    //   {
    //     date: "2018-06-01",
    //     time: "21:00",
    //     firstname: "Scott",
    //     lastname: "Williamson",
    //     location: "111 Fifth Ave"
    //   },
    //   {
    //     date: "2018-06-03",
    //     time: "10:30",
    //     firstname: "Aaric",
    //     lastname: "Falconi",
    //     location: "515 S Aiken Ave",
    //   },
    //   {
    //     date: "2018-06-19",
    //     time: "09:20",
    //     firstname: "Scott",
    //     lastname: "Williamson",
    //     location: "111 Fifth Ave"
    //   }
    // ];

    this.labtests = [
      {
        name: 'antigentic',
        result: '22mg/dl',
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
        date: '2018/02/08'
      },
      {
        vaccine: 'Influenza',
        schedule: 'Annual vaccination (IIV) 1 or 2 doses',
        ageGroup: 'Child and Adolescent',
        date: '2018/04/15'
      }
    ];

    this.ap.getAppointment(this.auth.userId)
      .subscribe(app => this.appointments = app,
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
      'id': i
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
