import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, ViewController } from 'ionic-angular';
import { ContactAddContactsPage } from '../contact-add-contacts/contact-add-contacts';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { AppointmentProvider } from '../../providers/appointment/appointment';

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

  userId: number;
  errMess: string;
  doctors: any[] = [];
  newAppointmentForm: FormGroup;
  date: Date;
  locations: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private contactsProvider: ContactsProvider,
    private ap: AppointmentProvider) {

    this.userId = 1;

    //get doctors in such structure
    this.contactsProvider.getDoctors(this.userId)
      .subscribe(doctors => this.doctors = doctors,
        errmess => this.errMess = <any>errmess);

    // this.doctors = [
    //   {
    //     id: 0,
    //     firstname: "Scott",
    //     lastname: "Williamson",
    //     locations: [
    //       "1100 Fifth Ave",
    //       "1090 Centre Ave"
    //     ]
    //   },
    //   {
    //     id: 1,
    //     firstname: "Aaric",
    //     lastname: "Falconi",
    //     locations: [
    //       "5542 Walnut St",
    //       "5819 Elwood St",
    //       "1001 Fifth Ave"
    //     ]
    //   }
    // ];

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
      if (doctor.id == $event)
        this.locations = doctor.locations;
    });
    console.log(this.locations);
  }

  addContact() {
    let modal = this.modalCtrl.create(ContactAddContactsPage);
    modal.present();
    modal.onWillDismiss(
      () => {
        this.contactsProvider.getDoctors(this.userId)
          .subscribe(doctors => this.doctors = doctors,
            errmess => this.errMess = <any>errmess);
      }
    );
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    //http post date + form.value
    let appForm = this.newAppointmentForm.value;
    let firstname, lastname;
    this.doctors.forEach(doctor => {
      if (doctor.id == appForm.doctor) {
        firstname = doctor.firstname;
        lastname = doctor.lastname;
      }
    });
    let app = {
      date: this.date,
      time: appForm.time,
      firstname: firstname,
      lastname: lastname,
      location: appForm.location
    };
    console.log(app);
    this.ap.addAppointment(app, this.userId)
      .subscribe(
        app => {
          this.toastCtrl.create({
            message: 'Successfully added a new appointment',
            position: 'bottom',
            duration: 2000
          }).present();
          this.viewCtrl.dismiss();
        },
        error => {
          this.toastCtrl.create({
            message: 'Failed to add a new appointment',
            position: 'bottom',
            duration: 2000
          }).present();
        }
      );
  }

  check_valid(): boolean {
    if (this.date == undefined)
      return false;
    else return true;
  }
}
