import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HealthRecordsProvider } from '../../providers/health-records/health-records';

import * as moment from 'moment';

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
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private auth: AuthServiceProvider,
    private hrp: HealthRecordsProvider) {

    this.title = navParams.get('title');
    this.id = navParams.get('id');
    this.questions = this.qp.getImmunizationQuestions(this.title);
    this.form = this.toFormGroup();
    this.navcolor = this.color[(this.id - 1) % 3];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImmunizationDetailPage');
  }

  toFormGroup() {
    let group: any = {};

    for (let i = 0; i < this.questions.length; i++) {
      let val = (this.questions[i].value == undefined) ? '' : this.questions[i].value;
      if (i == 1) {
        group[this.questions[i].selectkey] = new FormControl(this.questions[i].selectvalue, Validators.required);
        group[this.questions[i].inputkey] = new FormControl(this.questions[i].inputvalue, Validators.required);
        group[this.questions[i].datetimekey] = new FormControl(this.questions[i].datetimevalue, Validators.required);
      } else {
        group[this.questions[i].key] = this.questions[i].required ? new FormControl(val, Validators.required) : new FormControl(val);
      }
    }

    return new FormGroup(group);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.showLoader('Adding...');
    let payload = this.form.value;
    payload['date'] = moment().format();
    console.log(payload);
    this.hrp.addImmunization(this.auth.userId, payload)
      .subscribe(
        res => {
          this.loading.dismiss();
          this.presentToast('Successfully added!');
          this.viewCtrl.dismiss();
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
