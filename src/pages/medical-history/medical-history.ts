import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { MedicalHistoryDetailPage } from '../medical-history-detail/medical-history-detail';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';
import { HistoryProvider } from '../../providers/history/history';

/**
 * Generated class for the MedicalHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medical-history',
  templateUrl: 'medical-history.html',
})
export class MedicalHistoryPage {

  errMess: string;
  records: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private historyProvider: HistoryProvider) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    // get sorted records
    this.records = [
      {
        diagnosis: 'diabetes',
        date: '2008/08/26'
      },
      {
        diagnosis: 'hypertension',
        date: '2017/02/19'
      }
    ];

    this.historyProvider.getMedicalHistory(this.auth.userId)
      .subscribe(record => this.records = record,
        errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalHistoryPage');
  }

  addMedicalHistory() {
    let modal = this.modalCtrl.create(MedicalHistoryDetailPage);
    modal.present();
    modal.onWillDismiss(
      () => {
        this.historyProvider.getMedicalHistory(this.auth.userId)
          .subscribe(allergy => this.records = allergy,
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
