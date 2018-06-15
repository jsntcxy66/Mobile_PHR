import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { QuestionProvider } from '../../providers/question/question';
import { ContactAddContactsPage } from '../contact-add-contacts/contact-add-contacts';
import { QuestionControlProvider } from '../../providers/question-control/question-control';
import { SurgicalHistoryProvider } from './../../providers/surgical-history/surgical-history';
import { QuestionBase } from '../../shared/question-base';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SurgicalHistoryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-surgical-history-detail',
  templateUrl: 'surgical-history-detail.html',
})
export class SurgicalHistoryDetailPage implements OnInit {

  errMess: string;
  questions: any[]
  form: FormGroup = new FormGroup({});
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private qcp: QuestionControlProvider,
    private viewCtrl: ViewController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private shp: SurgicalHistoryProvider,
    private auth: AuthServiceProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurgicalHistoryDetailPage');
  }

  async ngOnInit() {
    this.questions = <QuestionBase<any>[]>await this.qp.getSurgicalHistoryQuestions(this.auth.userId);
    this.form = this.qcp.toFormGroup(this.questions);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addContact() {
    let modal = this.modalCtrl.create(ContactAddContactsPage);
    modal.present();
    modal.onWillDismiss(
      async () => {
        this.questions = <QuestionBase<any>[]>await this.qp.getSurgicalHistoryQuestions(this.auth.userId);
        this.form = this.qcp.toFormGroup(this.questions);
      }
    );
  }

  onSubmit() {
    this.showLoader('Adding...');
    let payLoad = this.form.value;
    console.log(payLoad);
    this.shp.addRecord(this.auth.userId, payLoad)
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
