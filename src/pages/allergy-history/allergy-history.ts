import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AllergyPage } from '../allergy/allergy';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';
import { HistoryProvider } from '../../providers/history/history';

/**
 * Generated class for the AllergyHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allergy-history',
  templateUrl: 'allergy-history.html',
})
export class AllergyHistoryPage {

  errMess: string;
  records: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private historyProvider: HistoryProvider,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    // this.records = [
    //   {
    //     category: 'Food Allergy',
    //     trigger: 'Eggs',
    //     symptom: 'Shortness of breath',
    //     threatening: true,
    //     date: '2018/01/09'
    //   },
    //   {
    //     category: 'Pet Allergy',
    //     trigger: 'Cat',
    //     symptom: 'Sneezing',
    //     threatening: false,
    //     date: '2017/10/21'
    //   },
    //   {
    //     category: 'Drug Allergy',
    //     trigger: 'Penicillin and related antibiotics',
    //     symptom: 'Skin rash',
    //     threatening: false,
    //     date: '2017/12/12'
    //   }
    // ];

    // get sorted records
    this.historyProvider.getAllergy(this.auth.userId)
      .subscribe(allergy => this.records = allergy,
        errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllergyHistoryPage');
  }

  ionViewWillEnter() {
    this.historyProvider.getAllergy(this.auth.userId)
      .subscribe(allergy => this.records = allergy,
        errmess => this.errMess = <any>errmess);
  }

  checkLifeThreatening(i): boolean {
    return this.records[i].threatening;
  }

  addAllergy() {
    this.navCtrl.push(AllergyPage);
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
            this.historyProvider.deleteAllergy(this.auth.userId, i)
              .subscribe(res => this.presentToast('Delete successfully.'),
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
      dismissOnPageChange: true
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
}
