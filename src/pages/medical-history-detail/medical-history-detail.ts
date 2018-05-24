import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';

/**
 * Generated class for the MedicalHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medical-history-detail',
  templateUrl: 'medical-history-detail.html',
})
export class MedicalHistoryDetailPage {

  questions: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private viewCtrl: ViewController) {

      this.questions = qp.getMedicalHistoryQuestions();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalHistoryDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}