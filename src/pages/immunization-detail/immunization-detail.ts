import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { QuestionControlProvider } from '../../providers/question-control/question-control';
import { ImmunizationProvider } from '../../providers/immunization/immunization';

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
  form: FormGroup = new FormGroup({});
  loading: any;
  color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
  navcolor: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private qcp: QuestionControlProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private auth: AuthServiceProvider,
    private ip: ImmunizationProvider) {

    this.title = navParams.get('title');
    this.id = navParams.get('id');
    this.questions = this.qp.getImmunizationQuestions(this.title);
    this.form = this.qcp.toFormGroup(this.questions);
    this.navcolor = this.color[(this.id - 1) % 3];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImmunizationDetailPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.showLoader('Adding...');
    let payLoad = this.form.value;
    console.log(payLoad);
    this.ip.addRecord(this.auth.userId, payLoad)
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
