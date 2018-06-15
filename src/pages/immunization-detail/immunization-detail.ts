import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ImmunizationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-immunization-detail',
  templateUrl: 'immunization-detail.html',
})
export class ImmunizationDetailPage {

  title: string;
  id: number;
  questions: any[];
  color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
  navcolor: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private viewCtrl: ViewController,
    private auth: AuthServiceProvider) {

    this.title = navParams.get('title');
    this.id = navParams.get('id');
    this.questions = this.qp.getImmunizationQuestions();
    this.navcolor = this.color[(this.id - 1) % 3];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImmunizationDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
