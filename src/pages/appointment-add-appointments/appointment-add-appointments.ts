import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, ViewController } from 'ionic-angular';
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
  locations: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController) {

    //get doctors in such structure
    this.doctors = [
      {
        id: 0,
        firstname: "Scott",
        lastname: "Williamson",
        locations: [
          "1100 Fifth Ave",
          "1090 Centre Ave"
        ]
      },
      {
        id: 1,
        firstname: "Aaric",
        lastname: "Falconi",
        locations: [
          "5542 Walnut St",
          "5819 Elwood St",
          "1001 Fifth Ave"
        ]
      }
    ];
    console.log(this.doctors);

    this.newAppointmentForm = this.fb.group({
      time: ['', Validators.required],
      doctor: ['', [Validators.required]],
      location: ['', [Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentAddAppointmentsPage');
  }

  selectDate($event) {
    this.date = $event;
    console.log(this.date);
  }

  selectDoctor($event) {
    //reset location formContrl value
    this.newAppointmentForm.patchValue({
      location: ''
    });
    this.locations = [];
    this.doctors.forEach(doctor => {
      if(doctor.id == $event)
        this.locations = doctor.locations;
    });
    console.log(this.locations);
  }

  addContact() {
    let modal = this.modalCtrl.create(ContactAddContactsPage);
    modal.present();
    this.dismiss();
    modal.onDidDismiss(() => {
      console.log("Contacts added");
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    //http post date + form.value
    console.log(this.newAppointmentForm.value);
    this.toastCtrl.create({
      message: 'Successfully added a new appointment',
      position: 'bottom',
      duration: 3000
    }).present();
    this.viewCtrl.dismiss();
  }

  check_valid(): boolean {
    if (this.date == undefined)
      return false;
    else return true;
  }
}
