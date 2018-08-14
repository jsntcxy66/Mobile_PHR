import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { QuestionControlProvider } from '../../providers/question-control/question-control';
import { HistoryProvider } from '../../providers/history/history';

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
  form: FormGroup = new FormGroup({});
  loading: any;
  color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
  navcolor: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private qcp: QuestionControlProvider,
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private historyProvider: HistoryProvider,
    private auth: AuthServiceProvider) {

    this.title = navParams.get('title');
    this.id = navParams.get('id');
    console.log(this.id);
    this.questions = this.qp.getSocialHistoryQuestions(this.id);
    this.form = this.qcp.toFormGroup(this.questions);
    this.navcolor = this.color[(this.id - 1) % 3];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialHistoryDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.showLoader('Adding...');
    let payload = this.form.value;
    console.log(payload);
    this.historyProvider.addSocialHistory(this.auth.userId, this.title, payload)
      .subscribe(
        res => {
          this.loading.dismiss();
          this.presentToast('Successfully added!');
          this.viewCtrl.dismiss();
        },
        err => {
          this.loading.dismiss();
          this.presentToast('Error: ' + err)
          console.log(err);
        }
      );
  }

  showLoader(msg) {
    this.loading = this.loadingCtrl.create({
      content: msg
    });
    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: false
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
}
