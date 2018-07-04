import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';
import { SurgicalHistoryDetailPage } from '../surgical-history-detail/surgical-history-detail';
import { WelcomePage } from './../welcome/welcome';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HistoryProvider } from '../../providers/history/history';

/**
 * Generated class for the SurgicalHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-surgical-history',
  templateUrl: 'surgical-history.html',
})
export class SurgicalHistoryPage {

  errMess: string;
  records: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private historyProvider: HistoryProvider,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) {


    // get sorted records
    // this.records = [
    //   {
    //     surgery: 'appendectomy',
    //     doctor: 'Aaric Falconi',
    //     date: '2018/04/26'
    //   },
    //   {
    //     surgery: 'arthrodesis',
    //     doctor: 'Scott Williamson',
    //     date: '2017/09/11'
    //   }
    // ];

    this.historyProvider.getSurgicalHistory(this.auth.userId)
      .subscribe(records => this.records = records,
        errmess => this.errMess = <any>errmess);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurgicalHistoryPage');
  }

  addSurgicalHistory() {
    let modal = this.modalCtrl.create(SurgicalHistoryDetailPage);
    modal.present();
    modal.onWillDismiss(
      () => this.historyProvider.getSurgicalHistory(this.auth.userId)
        .subscribe(records => this.records = records,
          errmess => this.errMess = <any>errmess)
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
            this.historyProvider.deleteSurgicalHistory(this.auth.userId, i)
              .subscribe(res => {
                this.presentToast('Delete successfully.');
                this.historyProvider.getSurgicalHistory(this.auth.userId)
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
