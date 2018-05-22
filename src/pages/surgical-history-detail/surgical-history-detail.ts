import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';
import { TextboxQuestion } from '../../components/dynamic-form-types/question-textbox';
import { DropdownQuestion } from '../../components/dynamic-form-types/question-dropdown';
import { DatetimeQuestion } from '../../components/dynamic-form-types/question-datetime';

/**
 * Generated class for the SurgicalHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-surgical-history-detail',
  templateUrl: 'surgical-history-detail.html',
})
export class SurgicalHistoryDetailPage {

  questions: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private viewCtrl: ViewController) {
      
      this.questions = qp.getSurgicalHistoryQuestions();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurgicalHistoryDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
