import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ImmunizationPage } from '../immunization/immunization';
import { WelcomePage } from '../welcome/welcome';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ImmunizationHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-immunization-history',
  templateUrl: 'immunization-history.html',
})
export class ImmunizationHistoryPage {

  records: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    //get records
    this.records = [
      {
        vaccine: 'MMR',
        schedule: '1 or 2 doses depending on indication',
        ageGroup: 'Adult',
        date: '2018/02/08'
      },
      {
        vaccine: 'Influenza',
        schedule: 'Annual vaccination (IIV) 1 or 2 doses',
        ageGroup: 'Child and Adolescent',
        date: '2018/04/15'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImmunizationHistoryPage');
  }

  addImmunization() {
    this.navCtrl.push(ImmunizationPage);
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
