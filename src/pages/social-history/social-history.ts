import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SocialHistoryCategoryPage } from '../social-history-category/social-history-category';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';

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

  smoking: any[] = [];
  alcohol: any[] = [];
  drug: any[] = [];
  travel: any[] = [];
  housing: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    // get sorted records
    this.smoking = [
      {
        amount: 3,
        date: '2018/01/09'
      },
      {
        amount: 7,
        date: '2018/01/01'
      }
    ];
    this.alcohol = [
      {
        name: 'wine',
        amount: '6',
        alcohol: '13.8',
        date: '2018/04/18'
      }
    ];
    this.travel = [
      {
        location: 'New York City',
        note: 'Nice experience',
        date: '2018/05/01'
      }
    ];
    this.housing = [
      {
        type: 'apartment',
        moveindate: '2017/08/01',
        moveoutdate: '2018/01/01'
      }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialHistoryPage');
  }

  addSocialHistory() {
    this.navCtrl.push(SocialHistoryCategoryPage);
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
