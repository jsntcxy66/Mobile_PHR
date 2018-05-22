import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';

/**
 * Generated class for the FamilyHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-family-history-detail',
  templateUrl: 'family-history-detail.html',
})
export class FamilyHistoryDetailPage {

  questions: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private viewCtrl: ViewController) {
      
      this.questions = qp.getFamilyHistoryQuestions();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyHistoryDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
