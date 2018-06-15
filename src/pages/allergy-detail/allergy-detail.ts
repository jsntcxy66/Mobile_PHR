import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';
import { QuestionControlProvider } from '../../providers/question-control/question-control';
import { AllergyProvider } from './../../providers/allergy/allergy';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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

  title: string;
  id: number;
  questions: any[];
  form: FormGroup;
  color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
  navcolor: string;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qcp: QuestionControlProvider,
    private qp: QuestionProvider,
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private allergyProvider: AllergyProvider,
    private auth: AuthServiceProvider) {

    this.title = navParams.get('title');
    this.id = navParams.get('id');
    this.questions = this.qp.getAllergyQuestions();
    this.form = this.qcp.toFormGroup(this.questions);
    this.navcolor = this.color[(this.id - 1) % 3];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllergyDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.showLoader('Adding...');
    let payLoad = this.form.value;
    payLoad['category'] = this.title;
    console.log(payLoad);
    this.allergyProvider.addAllergy(this.auth.userId, payLoad)
      .subscribe(
        res => {
          this.loading.dismiss();
          this.presentToast('Successfully added!');
          this.viewCtrl.dismiss();
        },
        err => {
          this.loading.dismiss();
          this.presentToast('Failed to add allergy record.');
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
      dismissOnPageChange: true
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}
