import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';
import { FamilyHistoryDetailPage } from '../family-history-detail/family-history-detail';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';
import { HistoryProvider } from '../../providers/history/history';

/**
 * Generated class for the FamilyHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-family-history',
  templateUrl: 'family-history.html',
})
export class FamilyHistoryPage {

  errMess: string;
  records: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private historyProvider: HistoryProvider) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    // get sorted records
    // this.records = [
    //   {
    //     relationship: 'Father',
    //     name: 'Martin Perkins',
    //     alive: true,
    //     disease: 'diabetes',
    //     date: '2008/08/26'
    //   },
    //   {
    //     relationship: 'Sister',
    //     name: 'Ross Perkins',
    //     alive: true,
    //     disease: 'hypertension',
    //     date: '2017/02/19'
    //   }
    // ];

    this.historyProvider.getFamilyHistory(this.auth.userId)
      .subscribe(record => this.records = record,
        errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyHistoryPage');
  }

  addFamilyHistory() {
    let modal = this.modalCtrl.create(FamilyHistoryDetailPage);
    modal.present();
    modal.onWillDismiss(
      () => {
        this.historyProvider.getFamilyHistory(this.auth.userId)
          .subscribe(record => this.records = record,
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
            this.historyProvider.deleteFamilyHistory(this.auth.userId, i)
              .subscribe(res => {
                this.presentToast('Delete successfully.');
                this.historyProvider.getFamilyHistory(this.auth.userId)
                  .subscribe(record => this.records = record,
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
