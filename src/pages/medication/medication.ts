import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';
import { MedicationDetailPage } from '../medication-detail/medication-detail';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';
import { HealthRecordsProvider } from '../../providers/health-records/health-records';

/**
 * Generated class for the MedicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medication',
  templateUrl: 'medication.html',
})
export class MedicationPage {

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
    //     name: 'Aspirin',
    //     frequency: 'Take 1 with food',
    //     date: '2018/02/08'
    //   },
    //   {
    //     name: 'Lyrica',
    //     frequency: '75mg, Take 1 with food',
    //     date: '2018/04/03'
    //   }
    // ];

    // get records
    this.hrp.getMedication(this.auth.userId)
      .subscribe(records => this.records = records,
        errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicationPage');
  }

  addMedication() {
    let modal = this.modalCtrl.create(MedicationDetailPage);
    modal.present();
    modal.onWillDismiss(
      () => {
        this.hrp.getMedication(this.auth.userId)
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
            this.hrp.deleteMedication(this.auth.userId, i)
              .subscribe(res => {
                this.presentToast('Delete successfully.');
                this.hrp.getMedication(this.auth.userId)
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
