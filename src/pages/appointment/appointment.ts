import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AppointmentAddAppointmentsPage } from '../appointment-add-appointments/appointment-add-appointments';
import { AppointmentProvider } from '../../providers/appointment/appointment';

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

  userId: number;
  errMess: string;
  appointments: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private ap: AppointmentProvider) {

    this.userId = 1;

    //get appointments which have already been sorted by time
    this.ap.getAppointment(this.userId)
      .subscribe(app => this.appointments = app,
        errmess => this.errMess = <any>errmess);

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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
  }

  addAppointment() {
    let modal = this.modalCtrl.create(AppointmentAddAppointmentsPage);
    modal.present();
    modal.onDidDismiss(() => {
      console.log("add appointment");
    });
  }
}
