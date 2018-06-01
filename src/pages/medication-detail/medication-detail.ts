import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';

/**
 * Generated class for the MedicationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medication-detail',
  templateUrl: 'medication-detail.html',
})
export class MedicationDetailPage {

  questions: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private viewCtrl: ViewController) {

      this.questions = qp.getMedicationQuestions();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicationDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}