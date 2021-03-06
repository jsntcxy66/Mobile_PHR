import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { QuestionProvider } from '../../providers/question/question';
import { QuestionControlProvider } from '../../providers/question-control/question-control';
import { TrackersProvider } from '../../providers/trackers/trackers';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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
  form: FormGroup;
  tracker: string = "track";
  records: any[] = [];
  errMess: string;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private qcp: QuestionControlProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private trackerProvider: TrackersProvider,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController) {

    this.title = navParams.get('title');
    this.id = navParams.get('id');
    this.questions = this.qp.getTrackersQuestions(this.id);
    this.form = this.qcp.toFormGroup(this.questions);

    // get particular records sorted by date from database
    this.trackerProvider.getRecords(this.auth.userId, this.id)
      .subscribe(records => this.records = records,
        errmess => this.errMess = <any>errmess);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackerDetailPage');
  }

  showNotes(i) {
    let alert = this.alertCtrl.create({
      message: 'Notes: ' + this.records[i].note,
      enableBackdropDismiss: true
    });
    alert.present();
  }

  onSubmit() {
    this.showLoader('Adding...');
    let payLoad = this.form.value;
    console.log(payLoad);
    this.trackerProvider.addRecord(this.auth.userId, this.id, payLoad)
      .subscribe(
        res => {
          this.loading.dismiss();
          this.presentToast('Successfully added!');
          this.trackerProvider.getRecords(this.auth.userId, this.id)
            .subscribe(records => this.records = records,
              errmess => this.errMess = <any>errmess);
          this.tracker = 'history';
        },
        err => {
          this.loading.dismiss();
          this.presentToast('Error: ' + err);
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
