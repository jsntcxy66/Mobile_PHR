import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DiagnosticProcedurePage } from '../diagnostic-procedure/diagnostic-procedure';
import { LabTestPage } from '../lab-test/lab-test';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the TestResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-results',
  templateUrl: 'test-results.html',
})
export class TestResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestResultsPage');
  }

  goToLabTest() {
    this.navCtrl.push(LabTestPage);
  }

  goToDiagnosticProcedure() {
    this.navCtrl.push(DiagnosticProcedurePage);
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
