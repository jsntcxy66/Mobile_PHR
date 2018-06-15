import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { MedicationDetailPage } from '../medication-detail/medication-detail';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';
import { MedicationProvider } from '../../providers/medication/medication';

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
    private medicationProvider: MedicationProvider) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    //get records
    this.records = [
      {
        name: 'Aspirin',
        frequency: 'Take 1 with food',
        date: '2018/02/08'
      },
      {
        name: 'Lyrica',
        frequency: '75mg, Take 1 with food',
        date: '2018/04/03'
      }
    ];

    this.medicationProvider.getRecords(this.auth.userId)
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
        this.medicationProvider.getRecords(this.auth.userId)
          .subscribe(records => this.records = records,
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
