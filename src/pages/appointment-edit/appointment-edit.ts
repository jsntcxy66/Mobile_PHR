import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, LoadingController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { AppointmentProvider } from './../../providers/appointment/appointment';
import { ContactsProvider } from './../../providers/contacts/contacts';
import { ContactAddContactsPage } from './../contact-add-contacts/contact-add-contacts';

import * as moment from 'moment';

/**
 * Generated class for the AppointmentEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment-edit',
  templateUrl: 'appointment-edit.html',
})
export class AppointmentEditPage implements OnInit {

  errMess: string;
  appointment: any = {};
  doctors: any[] = [];
  appointmentForm: FormGroup = new FormGroup({});
  locations: Array<string> = [];
  recordid: number;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder,
    private ap: AppointmentProvider,
    private auth: AuthServiceProvider,
    private contactsProvider: ContactsProvider,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private viewCtrl: ViewController) {

    this.recordid = this.navParams.get("recordid");

    this.ap.getAppointment(this.auth.userId)
      .subscribe(app => {
        this.appointment = app[this.recordid];
        console.log(this.appointment);
        this.locations = [app[this.recordid].location];
        this.appointmentForm.patchValue({
          date: this.appointment.date,
          doctor: this.appointment.doctorid,
          time: moment(this.appointment.date + " " + this.appointment.time).format(),
          location: this.appointment.location
        })
      },
        errmess => this.errMess = <any>errmess);

    this.appointmentForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      doctor: ['', Validators.required],
      location: ['', Validators.required]
    });
    console.log(this.appointmentForm);
  }

  async ngOnInit() {
    this.doctors = <any[]>await this.contactsProvider.getDoctors(this.auth.userId).toPromise();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentEditPage');
  }

  selectDoctor($event) {
    //reset location formContrl value
    this.appointmentForm.patchValue({
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
      async () => {
        this.doctors = <any[]>await this.contactsProvider.getDoctors(this.auth.userId).toPromise();
      }
    );
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.showLoader('editing...');
    //http post date + form.value
    let appForm = this.appointmentForm.value;
    let firstname, lastname;
    this.doctors.forEach(doctor => {
      if (doctor.id == appForm.doctor) {
        firstname = doctor.firstname;
        lastname = doctor.lastname;
      }
    });
    console.log(appForm.time);
    // format time
    let newTime;
    if (appForm.time.length > 6) {
      newTime = moment(appForm.time).format('HH:mm');
    } else newTime = appForm.time;

    let app = {
      doctorid: appForm.doctor,
      date: appForm.date,
      time: newTime,
      firstname: firstname,
      lastname: lastname,
      location: appForm.location
    };
    console.log(app);
    this.ap.editAppointment(this.auth.userId, this.recordid, app)
      .subscribe(
        app => {
          this.loading.dismiss();
          this.presentToast('Successfully edited.');
          this.viewCtrl.dismiss();
        },
        error => {
          this.loading.dismiss();
          this.presentToast('Error: ' + error);
        }
      );
  }

  showLoader(msg) {
    this.loading = this.loadingCtrl.create({
      content: msg
    });
    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: false
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}
