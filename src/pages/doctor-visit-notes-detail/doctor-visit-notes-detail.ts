import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { QuestionProvider } from '../../providers/question/question';
import { QuestionControlProvider } from '../../providers/question-control/question-control';
import { ContactAddContactsPage } from '../contact-add-contacts/contact-add-contacts';
import { QuestionBase } from '../../shared/question-base';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HealthRecordsProvider } from '../../providers/health-records/health-records';

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
export class DoctorVisitNotesDetailPage implements OnInit {

  questions: any[];
  form: FormGroup = new FormGroup({});
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private qcp: QuestionControlProvider,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private hrp: HealthRecordsProvider,
    private auth: AuthServiceProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorVisitNotesDetailPage');
  }

  async ngOnInit() {
    this.questions = <QuestionBase<any>[]>await this.qp.getDoctorVisitNotesQuestions(this.auth.userId);
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
        this.questions = <QuestionBase<any>[]>await this.qp.getDoctorVisitNotesQuestions(this.auth.userId);
        this.form = this.qcp.toFormGroup(this.questions);
      }
    );
  }

  onSubmit() {
    this.showLoader('Adding...');
    let payLoad = this.form.value;
    console.log(payLoad);
    this.hrp.addDoctorVisitNotes(this.auth.userId, payLoad)
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
      dismissOnPageChange: false
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}
