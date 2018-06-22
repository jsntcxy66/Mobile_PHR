import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';
import { QuestionControlProvider } from '../../providers/question-control/question-control';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the PasswordRetrievePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password-retrieve',
  templateUrl: 'password-retrieve.html',
})
export class PasswordRetrievePage {

  typeid: number;
  questions: any[];
  form: FormGroup = new FormGroup({});
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController,
    private qp: QuestionProvider,
    private qcp: QuestionControlProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private auth: AuthServiceProvider) {

    this.typeid = this.navParams.get('id');
    if (this.typeid == 1) {
      this.questions = this.qp.getResetPasswordQuestion();
    }
    this.form = this.qcp.toFormGroup(this.questions);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordRetrievePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.showLoader('Editting...');
    let payLoad = this.form.value;
    console.log(payLoad);
    if (payLoad.confirmPassword == payLoad.newPassword) {
      this.auth.resetPassword(this.auth.userId, payLoad)
      .subscribe(
        (res: number) => {
          if (res == 0) {
            this.loading.dismiss();
            this.presentToast('Successfully edited!');
            this.viewCtrl.dismiss();
          }
          else if (res == -1) {
            this.loading.dismiss();
            this.presentToast("Wrong password!");
          }
        },
        err => {
          this.loading.dismiss();
          this.presentToast('Failed to edit.');
        }
      );
    }
    else {
      this.loading.dismiss();
      this.presentToast("Password does't match!");
    }

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
