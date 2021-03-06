import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { SocialHistoryCategoryPage } from '../social-history-category/social-history-category';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';
import { HistoryProvider } from '../../providers/history/history';

/**
 * Generated class for the SocialHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social-history',
  templateUrl: 'social-history.html',
})
export class SocialHistoryPage {

  errMess: string;
  records: Object = { smoking: [], alcohol: [], drug: [], travel: [], housing: [] };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private historyProvider: HistoryProvider) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    // get sorted records
    // this.records = {
    //   smoking: [
    //     {
    //       amount: 3,
    //       date: '2018/01/09'
    //     },
    //     {
    //       amount: 7,
    //       date: '2018/01/01'
    //     }
    //   ],
    //   alcohol: [
    //     {
    //       name: 'wine',
    //       amount: '6',
    //       alcohol: '13.8',
    //       date: '2018/04/18'
    //     }
    //   ],
    //   drug: [],
    //   travel: [
    //     {
    //       location: 'New York City',
    //       note: 'Nice experience',
    //       date: '2018/05/01'
    //     }
    //   ],
    //   housing: [
    //     {
    //       type: 'apartment',
    //       moveindate: '2017/08/01',
    //       moveoutdate: '2018/01/01',
    //       note: ''
    //     }
    //   ]
    // };

    this.historyProvider.getSocialHistory(this.auth.userId)
      .subscribe(record => this.records = record,
        errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialHistoryPage');
  }

  ionViewWillEnter() {
    this.historyProvider.getSocialHistory(this.auth.userId)
      .subscribe(record => this.records = record,
        errmess => this.errMess = <any>errmess);
  }

  addSocialHistory() {
    this.navCtrl.push(SocialHistoryCategoryPage);
  }

  deleteRecord(type: string, i: number) {
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
            this.historyProvider.deleteSocialHistory(this.auth.userId, type, i)
              .subscribe(res => {
                this.presentToast('Delete successfully.');
                this.historyProvider.getSocialHistory(this.auth.userId)
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
