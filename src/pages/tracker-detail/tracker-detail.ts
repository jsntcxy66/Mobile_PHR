import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { QuestionProvider } from '../../providers/question/question';

/**
 * Generated class for the TrackerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracker-detail',
  templateUrl: 'tracker-detail.html',
})
export class TrackerDetailPage {

  title: string;
  id: number;
  questions: any[];
  tracker: string = "history";
  records: any[];
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private viewCtrl: ViewController) {

      this.title = navParams.get('title');
      this.id = navParams.get('id');
      this.questions = qp.getTrackersQuestions(this.id);

      // get particular records from database
      if(this.id == 1) {
        this.records = [
          {
            food: 'Burger',
            amount: '300g',
            timeperiod: 'lunch',
            date: '2018/05/29'
          },
          {
            food: 'Jelly',
            amount: '15g',
            timeperiod: 'snack',
            date: '2018/05/25'
          },
          {
            food: 'Milk',
            amount: '150ml',
            timeperiod: 'breakfast',
            date: '2018/05/29'
          }
        ];
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackerDetailPage');
  }
  

}
