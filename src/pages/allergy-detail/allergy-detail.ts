import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { QuestionProvider } from '../../providers/question/question';

/**
 * Generated class for the AllergyDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allergy-detail',
  templateUrl: 'allergy-detail.html',
})
export class AllergyDetailPage {
  
  tab: string = "form";
  title: string;
  id: number;
  questions: any[];
  color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
  navcolor: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider) {

      this.title = navParams.get('title');
      this.id = navParams.get('id');
      this.questions = qp.getAllergyQuestions();
      this.navcolor = this.color[(this.id-1)%3];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllergyDetailPage');
  }

}
