import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { QuestionProvider } from '../../providers/question/question';
import { QuestionControlProvider } from '../../providers/question-control/question-control';
import { TestResultsProvider } from '../../providers/test-results/test-results';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the DiagnosticProcedureDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diagnostic-procedure-detail',
  templateUrl: 'diagnostic-procedure-detail.html',
})
export class DiagnosticProcedureDetailPage {

  title: string;
  id: number;
  tab: string = 'form';
  questions: any[];
  form: FormGroup;
  errMess: string;
  loading: any;
  color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
  navcolor: string;
  records: Array<any> = [];
  data: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private qcp: QuestionControlProvider,
    private auth: AuthServiceProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private trp: TestResultsProvider) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    this.title = navParams.get('title');
    this.id = navParams.get('id');
    this.questions = this.qp.getDiagnosticProcedureQuestions();
    this.form = this.qcp.toFormGroup(this.questions);
    this.navcolor = this.color[(this.id + 1) % 3];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagnosticProcedureDetailPage');
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
      dismissOnPageChange: true
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Oops!',
      message: msg,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.push(WelcomePage);
          }
        }
      ]
    });
    alert.present();
  }

}
