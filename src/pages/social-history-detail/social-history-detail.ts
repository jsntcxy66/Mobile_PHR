import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';

/**
 * Generated class for the SocialHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social-history-detail',
  templateUrl: 'social-history-detail.html',
})
export class SocialHistoryDetailPage {

  title: string;
  id: number;
  questions: any[];
  color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
  navcolor: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private viewCtrl: ViewController) {

      this.title = navParams.get('title');
      this.id = navParams.get('id');
      console.log(this.id);
      this.questions = qp.getSocialHistoryQuestions(this.id);
      this.navcolor = this.color[(this.id-1)%3];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialHistoryDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
