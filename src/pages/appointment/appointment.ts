import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { AppointmentAddAppointmentsPage } from '../appointment-add-appointments/appointment-add-appointments';
import { AppointmentProvider } from '../../providers/appointment/appointment';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {

  errMess: string;
  appointments: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private ap: AppointmentProvider,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    //get appointments which have already been sorted by time
    this.ap.getAppointment(this.auth.userId)
      .subscribe(app => this.appointments = app,
        errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
  }

  addAppointment() {
    let modal = this.modalCtrl.create(AppointmentAddAppointmentsPage);
    modal.present();
    modal.onWillDismiss(
      () => {
        this.ap.getAppointment(this.auth.userId)
          .subscribe(app => this.appointments = app,
            errmess => this.errMess = <any>errmess);
      }
    );
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
