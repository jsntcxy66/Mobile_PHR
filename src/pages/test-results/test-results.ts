import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicalrecordPage } from '../medicalrecord/medicalrecord';
import { DiagnosticProcedurePage } from '../diagnostic-procedure/diagnostic-procedure';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestResultsPage');
  }

  goToLabTest() {
    this.navCtrl.push(MedicalrecordPage);
  }

  goToDiagnosticProcedure() {
    this.navCtrl.push(DiagnosticProcedurePage);
  }

}
