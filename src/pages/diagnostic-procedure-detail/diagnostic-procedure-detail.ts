import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { QuestionProvider } from '../../providers/question/question';
import { QuestionControlProvider } from '../../providers/question-control/question-control';
import { WelcomePage } from '../welcome/welcome';
import { HealthRecordsProvider } from '../../providers/health-records/health-records';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private qp: QuestionProvider,
    private qcp: QuestionControlProvider,
    private auth: AuthServiceProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private hrp: HealthRecordsProvider) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    this.title = navParams.get('title');
    this.id = navParams.get('id');
    this.questions = this.qp.getDiagnosticProcedureQuestions(this.title, this.id);
    this.form = this.qcp.toFormGroup(this.questions);
    this.navcolor = this.color[(this.id + 1) % 3];


    // if (this.id == 2 || this.id == 5) {
    //   this.records = [
    //     {
    //       "organ": "liver",
    //       "results": [
    //         {
    //           "result": "BB",
    //           "date": "2018-06-15T01:37:58-04:00",
    //           "note": ""
    //         },
    //         {
    //           "result": "BBB",
    //           "date": "2018-06-12T01:37:58-04:00",
    //           "note": ""
    //         }
    //       ]
    //     },
    //     {
    //       "organ": "lung",
    //       "results": [
    //         {
    //           "result": "BB",
    //           "date": "2018-06-15T01:37:58-04:00",
    //           "note": ""
    //         }
    //       ]
    //     }
    //   ];
    // }
    // else if (this.id == 3 || this.id == 4) {
    //   this.records = [
    //     {
    //       "organ": "liver",
    //       "results": [
    //         {
    //           "result": "AA",
    //           "contrast": true,
    //           "date": "2018-06-15T01:37:58-04:00",
    //           "note": ":("
    //         },
    //         {
    //           "result": "AAA",
    //           "contrast": false,
    //           "date": "2018-06-12T01:37:58-04:00",
    //           "note": ""
    //         }
    //       ]
    //     },
    //     {
    //       "organ": "lung",
    //       "results": [
    //         {
    //           "result": "AA",
    //           "contrast": true,
    //           "date": "2018-06-15T01:37:58-04:00",
    //           "note": ""
    //         }
    //       ]
    //     }
    //   ]
    // }
    // else {
    //   this.records = [
    //     {
    //       "name": "Sleep Study",
    //       "results": [
    //         {
    //           "result": "AAA",
    //           "date": "2018-06-15T01:37:58-04:00",
    //           "note": ""
    //         },
    //         {
    //           "result": "BBB",
    //           "date": "2018-06-12T01:37:58-04:00",
    //           "note": ""
    //         }
    //       ]
    //     }
    //   ];
    // }

    // this.records[0]['open'] = true;
    // for (let i = 1; i < this.records.length; i++) {
    //   this.records[i]['open'] = false;
    // }

    this.hrp.getDiagnosticProcedure(this.auth.userId, this.id)
      .subscribe(records => {
        this.records = records;
        if (this.records.length != 0) {
          this.records[0]['open'] = true;
          for (let i = 1; i < this.records.length; i++) {
            this.records[i]['open'] = false;
          }
        }
        console.log(this.records);
      },
        errmess => this.errMess = <any>errmess);

    console.log(this.records);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagnosticProcedureDetailPage');
  }

  toggleSection(i) {
    this.records[i].open = !this.records[i].open;
  }

  showNotes(i, j) {
    let alert = this.alertCtrl.create({
      message: 'Notes: ' + this.records[i].results[j].note,
      enableBackdropDismiss: true
    });

    alert.present();
  }

  onSubmit() {
    this.showLoader('Adding...');
    let payload = this.form.value;
    console.log(payload);
    this.hrp.addDiagnosticProcedure(this.auth.userId, this.id, payload)
      .subscribe(
        res => {
          this.loading.dismiss();
          this.presentToast('Successfully added!');
          this.hrp.getDiagnosticProcedure(this.auth.userId, this.id)
            .subscribe(records => {
              this.records = records;
              if (this.records.length != 0) {
                this.records[0]['open'] = true;
                for (let i = 1; i < this.records.length; i++) {
                  this.records[i]['open'] = false;
                }
              }
              console.log(this.records);
              this.tab = 'history';
            },
              errmess => this.errMess = <any>errmess);
        },
        err => {
          this.loading.dismiss();
          this.presentToast('Error: ' + err);
        }
      );
  }

  deleteRecord(i, j) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this record?',
      enableBackdropDismiss: true,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.hrp.deleteDiagnosticProcedure(this.auth.userId, this.id, i, j)
              .subscribe(res => {
                this.presentToast('Delete successfully.');
                this.hrp.getDiagnosticProcedure(this.auth.userId, this.id)
                  .subscribe(records => {
                    this.records = records;
                    if (this.records.length != 0) {
                      this.records[0]['open'] = true;
                      for (let i = 1; i < this.records.length; i++) {
                        this.records[i]['open'] = false;
                      }
                    }
                    console.log(this.records);
                    this.tab = 'history';
                  },
                    errmess => this.errMess = <any>errmess);
              },
                err => this.presentToast('Error: ' + err));
          }
        }
      ]
    });
    alert.present();
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
