import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppointmentAddAppointmentsPage } from '../appointment-add-appointments/appointment-add-appointments';

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

  appointments: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      //appointments should be already sorted by time
    this.appointments = [
      {
        time: "2018-06-01",
        firstname: "Scott",
        lastname: "Williamson",
        gender: "male",
        address: "111 Fifth Ave"
      },
      {
        time: "2018-06-03",
        firstname: "Aaric",
        lastname: "Falconi",
        gender: "male",
        address: "515 S Aiken Ave",
      },
      {
        time: "2018-06-19",
        firstname: "Scott",
        lastname: "Williamson",
        gender: "male",
        address: "111 Fifth Ave"
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
  }

  addAppointment() {
    this.navCtrl.push(AppointmentAddAppointmentsPage);
  }
}
