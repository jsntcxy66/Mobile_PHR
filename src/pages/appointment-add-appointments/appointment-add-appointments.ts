import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { ContactAddContactsPage } from '../contact-add-contacts/contact-add-contacts';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the AppointmentAddAppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment-add-appointments',
  templateUrl: 'appointment-add-appointments.html',
})
export class AppointmentAddAppointmentsPage {

  doctors: any;
  newAppointmentForm: FormGroup;
  date: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private toastCtrl: ToastController) {

    this.doctors = [
      {
        id: 0,
        firstname: "Scott",
        lastname: "Williamson",
        gender: "male"
      },
      {
        id: 1,
        firstname: "Aaric",
        lastname: "Falconi",
        gender: "male"
      }
    ];
    console.log(this.doctors);

    this.newAppointmentForm = this.fb.group({
      doctor: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentAddAppointmentsPage');
  }

  selectDate($event) {
    this.date = $event;
    console.log(this.date);
  }

  addContact() {
    let modal = this.modalCtrl.create(ContactAddContactsPage);
    modal.present();
    modal.onDidDismiss(() => {
      console.log("Contacts added");
    });
  }

  onSubmit() {
    //http
    console.log(this.newAppointmentForm.value);
    this.toastCtrl.create({
      message: 'Successfully added a new appointment',
      position: 'bottom',
      duration: 3000
    }).present();
  }

  check_valid(): boolean {
    if (this.date == undefined)
      return false;
    else return true;
  }
}
