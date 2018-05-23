import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';

/**
 * Generated class for the DoctorVisitNotesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-visit-notes-detail',
  templateUrl: 'doctor-visit-notes-detail.html',
})
export class DoctorVisitNotesDetailPage {

  questions: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private viewCtrl: ViewController) {

      this.questions = qp.getDoctorVisitNotesQuestions();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorVisitNotesDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
