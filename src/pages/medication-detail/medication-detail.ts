import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { QuestionControlProvider } from '../../providers/question-control/question-control';
import { MedicationProvider } from '../../providers/medication/medication';

/**
 * Generated class for the MedicationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medication-detail',
  templateUrl: 'medication-detail.html',
})
export class MedicationDetailPage {

  questions: any[];
  form: FormGroup = new FormGroup({});
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private qcp: QuestionControlProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private auth: AuthServiceProvider,
    private medicationProvider: MedicationProvider) {

    this.questions = this.qp.getMedicationQuestions();
    this.form = this.qcp.toFormGroup(this.questions);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicationDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.showLoader('Adding...');
    let payLoad = this.form.value;
    console.log(payLoad);
    this.medicationProvider.addRecord(this.auth.userId, payLoad)
      .subscribe(
        res => {
          this.loading.dismiss();
          this.presentToast('Successfully added!');
          this.viewCtrl.dismiss();
        },
        err => {
          this.loading.dismiss();
          this.presentToast('Failed to add the record.');
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
