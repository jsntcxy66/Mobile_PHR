import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AllergyPage } from '../allergy/allergy';
import { AllergyProvider } from '../../providers/allergy/allergy';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';

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
  records: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private allergyProvider: AllergyProvider,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController) {

      if (!this.auth.userId) {
        this.presentAlert('Please login first.');
      }
    // get sorted records
    this.records = [
      {
        category: 'Food Allergy',
        trigger: 'Eggs',
        symptom: 'Shortness of breath',
        threatening: true,
        date: '2018/01/09'
      },
      {
        category: 'Pet Allergy',
        trigger: 'Cat',
        symptom: 'Sneezing',
        threatening: false,
        date: '2017/10/21'
      },
      {
        category: 'Drug Allergy',
        trigger: 'Penicillin and related antibiotics',
        symptom: 'Skin rash',
        threatening: false,
        date: '2017/12/12'
      }
    ];

    this.allergyProvider.getAllergy(this.auth.userId)
      .subscribe(allergy => this.records = allergy,
        errmess => this.errMess = <any>errmess);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllergyHistoryPage');
  }

  checkLifeThreatening(i): boolean {
    return this.records[i].threatening;
  }

  addAllergy() {
    this.navCtrl.push(AllergyPage);
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
