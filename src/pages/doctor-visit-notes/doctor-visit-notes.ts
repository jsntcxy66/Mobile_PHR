import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';
import { DoctorVisitNotesDetailPage } from '../doctor-visit-notes-detail/doctor-visit-notes-detail';
import { WelcomePage } from '../welcome/welcome';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HealthRecordsProvider } from '../../providers/health-records/health-records';

/**
 * Generated class for the DoctorVisitNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-visit-notes',
  templateUrl: 'doctor-visit-notes.html',
})
export class DoctorVisitNotesPage {

  errMess: string;
  records: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private hrp: HealthRecordsProvider) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    // this.records = [
    //   {
    //     diagnosis: 'influenza',
    //     doctor: 'Aaric Falconi',
    //     prescription: 'Have some rest',
    //     date: '2018/05/21',
    //     reason: 'feel a headache'
    //   }
    // ];

    this.hrp.getDoctorVisitNotes(this.auth.userId)
      .subscribe(records => this.records = records,
        errmess => this.errMess = <any>errmess);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorVisitNotesPage');
  }

  addNotes() {
    let modal = this.modalCtrl.create(DoctorVisitNotesDetailPage);
    modal.present();
    modal.onWillDismiss(
      () => {
        this.hrp.getDoctorVisitNotes(this.auth.userId)
          .subscribe(records => this.records = records,
            errmess => this.errMess = <any>errmess);
      }
    );
  }

  deleteRecord(i) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this record?',
      enableBackdropDismiss: true,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.hrp.deleteDoctorVisitNotes(this.auth.userId, i)
              .subscribe(res => {
                this.presentToast('Delete successfully.');
                this.hrp.getDoctorVisitNotes(this.auth.userId)
                  .subscribe(records => this.records = records,
                    errmess => this.errMess = <any>errmess);
              },
                err => this.presentToast('Error: ' + err));
          }
        }
      ]
    });
    alert.present();
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
