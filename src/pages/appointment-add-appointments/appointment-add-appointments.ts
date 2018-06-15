import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, ViewController, LoadingController } from 'ionic-angular';
import { ContactAddContactsPage } from '../contact-add-contacts/contact-add-contacts';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { AppointmentProvider } from '../../providers/appointment/appointment';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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
export class AppointmentAddAppointmentsPage implements OnInit {

  errMess: string;
  doctors: any[] = [];
  newAppointmentForm: FormGroup = new FormGroup({});
  date: Date;
  locations: Array<string> = [];
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private contactsProvider: ContactsProvider,
    private ap: AppointmentProvider,
    private auth: AuthServiceProvider) {

    // this.storage.get('userId').then(userId => {
    //   if (userId)
    //     this.userId = userId;
    //   else
    //     console.log('userId not defined');
    // });

    //get doctors in such structure
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

  async ngOnInit() {
    this.doctors = <any[]>await this.contactsProvider.getDoctors(this.auth.userId).toPromise();
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
      async () => {
        this.doctors = <any[]>await this.contactsProvider.getDoctors(this.auth.userId).toPromise();
      }
    );
    this.dismiss();
  }

  check_valid(): boolean {
    if (this.date == undefined)
      return false;
    else return true;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.showLoader('Adding...');
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
    this.ap.addAppointment(this.auth.userId, app)
      .subscribe(
        app => {
          this.loading.dismiss();
          this.presentToast('Successfully added a new appointment.');
          this.viewCtrl.dismiss();
        },
        error => {
          this.loading.dismiss();
          this.presentToast('Failed to add a new appointment.');
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
      dismissOnPageChange: true
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}
