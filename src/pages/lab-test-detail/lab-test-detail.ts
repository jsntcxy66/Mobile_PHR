import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';
import { QuestionControlProvider } from '../../providers/question-control/question-control';

import * as moment from 'moment';
import { HealthRecordsProvider } from '../../providers/health-records/health-records';
/**
 * Generated class for the LabTestDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-test-detail',
  templateUrl: 'lab-test-detail.html',
})
export class LabTestDetailPage implements OnInit {

  title: string;
  id: number;
  unit: string[] = [];
  showChart: boolean = false;
  subtest: Array<string>;
  tab: string;
  questions: any[];
  form: FormGroup;
  errMess: string;
  loading: any;
  color = ['dark-salmon', 'rosy-brown', 'slate-grey'];
  navcolor: string;

  records: Array<any>;
  data: Array<any> = [];
  date: Array<any> = [];
  results: Array<any> = [];
  abnormalColor: Array<string> = [];

  lineChartOptions: any = { responsive: true };
  lineChartData: any;
  lineChartLabels: Array<any> = [];
  lineChartColors: any;
  lineChartLegend: boolean = true;
  lineChartType: string = 'line';

  charts: Array<any> = [];

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

    this.tab = navParams.get('tab');
    this.title = navParams.get('title');
    this.id = navParams.get('id');
    this.subtest = navParams.get('subtest');
    this.questions = this.qp.getLabTestQuestions(this.title);
    this.form = this.qcp.toFormGroup(this.questions);
    this.navcolor = this.color[(this.id + 1) % 3];

    // if (this.id == 2) {
    //   this.data = [
    //     {
    //       "subtest": "BMP (Basic Metabolic Panel)",
    //       "open": true,
    //       "unit": "mg/dL",
    //       "results": [
    //         {
    //           "result": "22",
    //           "abnormal": true,
    //           "note": 'XDXDXDXDXDXDXDXDXDXDXDXDXDXDXDXD',
    //           "date": "2011-12-10T17:57:28.556094Z"
    //         },
    //         {
    //           "result": "30",
    //           "abnormal": false,
    //           "note": ':):):)',
    //           "date": "2011-12-09T17:57:28.556094Z"
    //         },
    //         {
    //           "result": "40",
    //           "abnormal": false,
    //           "note": '',
    //           "date": "2011-12-08T17:57:28.556094Z"
    //         },
    //         {
    //           "result": "24",
    //           "abnormal": true,
    //           "note": ':D',
    //           "date": "2011-12-07T17:57:28.556094Z"
    //         },
    //         {
    //           "result": "18",
    //           "abnormal": true,
    //           "note": '',
    //           "date": "2011-12-06T02:08:21.199Z"
    //         },
    //         {
    //           "result": "26",
    //           "abnormal": false,
    //           "note": '',
    //           "date": "2011-12-05T02:14:16.365Z"
    //         },
    //         {
    //           "result": "36",
    //           "abnormal": false,
    //           "note": '',
    //           "date": "2011-12-04T02:30:10.570Z"
    //         },
    //         {
    //           "result": "45",
    //           "abnormal": false,
    //           "note": '',
    //           "date": "2011-12-03T02:52:17.718Z"
    //         },
    //         {
    //           "result": "35",
    //           "abnormal": false,
    //           "note": '',
    //           "date": "2011-12-02T01:38:47.452Z"
    //         }
    //       ]
    //     },
    //     {
    //       "subtest": "BMP 3",
    //       "open": false,
    //       "unit": "",
    //       "results": [
    //         {
    //           "result": "negative",
    //           "abnormal": true,
    //           "note": 'XDXDXDXDXDXDXDXDXDXDXDXDXDXDXDXD',
    //           "date": "2011-12-10T17:57:28.556094Z"
    //         },
    //         {
    //           "result": "positive",
    //           "abnormal": false,
    //           "note": ':):):)',
    //           "date": "2011-12-09T17:57:28.556094Z"
    //         },
    //         {
    //           "result": "positive",
    //           "abnormal": false,
    //           "note": '',
    //           "date": "2011-12-08T17:57:28.556094Z"
    //         }
    //       ]
    //     },
    //     {
    //       "subtest": "BMP (Basic Metabolic Panel) (Other)",
    //       "open": false,
    //       "unit": "mg/dL",
    //       "results": [
    //         {
    //           "result": "12",
    //           "abnormal": true,
    //           "note": 'XDXDXDXDXDXDXDXDXDXDXDXDXDXDXDXD',
    //           "date": "2011-12-10T17:57:28.556094Z"
    //         },
    //         {
    //           "result": "53",
    //           "abnormal": false,
    //           "note": ':):):)',
    //           "date": "2011-12-09T17:57:28.556094Z"
    //         },
    //         {
    //           "result": "88",
    //           "abnormal": false,
    //           "note": '',
    //           "date": "2011-12-08T17:57:28.556094Z"
    //         },
    //         {
    //           "result": "26",
    //           "abnormal": true,
    //           "note": ':D',
    //           "date": "2011-12-07T17:57:28.556094Z"
    //         },
    //         {
    //           "result": "40",
    //           "abnormal": true,
    //           "note": '',
    //           "date": "2011-12-06T02:08:21.199Z"
    //         },
    //         {
    //           "result": "30",
    //           "abnormal": false,
    //           "note": '',
    //           "date": "2011-12-05T02:14:16.365Z"
    //         }
    //       ]
    //     },
    //   ];
    // }
    // this.unit = [];
    // this.data.forEach(record => {
    //   this.unit.push(record.unit);
    // });
    // console.log(this.unit);
    // this.drawcanvas();


    // this.hrp.getLabtTest(this.auth.userId, this.id)
    //   .subscribe(records => {
    //     this.records = records;
    //     console.log(this.records);
    //     if (this.records.length != 0) {
    //       // set extension panel of first category in record history in 'open' status
    //       this.records[0]['open'] = true;
    //       for (let i = 1; i < this.records.length; i++) {
    //         this.records[i]['open'] = false;
    //       }
    //       //get unit array
    //       this.unit = [];
    //       this.records.forEach(record => {
    //         this.unit.push(record.unit);
    //       });
    //     }
    //     this.data = this.records;
    //     console.log(this.data);
    //     if (this.data.length != 0) this.drawcanvas();
    //   },
    //     errmess => this.errMess = <any>errmess);

  }

  async ngOnInit() {
    this.records = <any[]>await this.hrp.getLabtTest(this.auth.userId, this.id).toPromise();
    console.log(this.records);

    if (this.records.length != 0) {

      // set extension panel of first category in record history in 'open' status
      this.records[0]['open'] = true;
      for (let i = 1; i < this.records.length; i++) {
        this.records[i]['open'] = false;
      }

      this.unit = [];
      this.records.forEach(record => {
        // get unit array
        this.unit.push(record.unit);
        // control chart display
        if (record.unit.length != 0) this.showChart = true;
      });
      console.log(this.showChart);

    }

    this.data = this.records;
    console.log(this.data);
    if (this.data.length != 0) this.drawcanvas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabTestDetailPage');
  }

  drawcanvas() {
    this.charts = [];
    for (var i = 0; i < this.data.length; i++) {
      this.date = [];
      this.results = [];
      this.abnormalColor = [];

      if (this.data[i].unit.length != 0) {
        this.data[i].results.forEach(result => {
          this.date.push(moment(result.date).format('MM/DD'));
          this.results.push(result.result);
          if (result.abnormal == true)
            this.abnormalColor.push('red');
          else
            this.abnormalColor.push('rgba(148,159,177,1)');
        });
        console.log(this.abnormalColor);
        this.lineChartLabels = this.date.reverse();
        this.lineChartData = [{ data: this.results, label: this.data[i].subtest }];
        this.lineChartColors = [{
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: this.abnormalColor,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }];
        this.charts.push({
          lineChartData: this.lineChartData,
          lineChartLabels: this.lineChartLabels,
          lineChartOptions: this.lineChartOptions,
          lineChartColors: this.lineChartColors,
          lineChartLegend: this.lineChartLegend,
          lineChartType: this.lineChartType
        });
      }
      console.log(this.charts);
    }

  }

  toggleSection(i) {
    this.data[i].open = !this.data[i].open;
  }

  showNotes(i, j) {
    let alert = this.alertCtrl.create({
      message: 'Notes: ' + this.data[i].results[j].note,
      enableBackdropDismiss: true
    });
    alert.present();
  }

  chartHovered($event) {

  }

  chartClicked($event) {

  }

  onSubmit() {
    this.showLoader('Adding...');
    let payLoad = this.form.value;
    console.log(payLoad);
    this.hrp.addLabTest(this.auth.userId, this.id, payLoad)
      .subscribe(
        res => {
          this.loading.dismiss();
          this.presentToast('Successfully added!');
          this.hrp.getLabtTest(this.auth.userId, this.id)
            .subscribe(records => {
              this.records = records;
              console.log(this.records);
              if (this.records.length != 0) {

                // set extension panel of first category in record history in 'open' status
                this.records[0]['open'] = true;
                for (let i = 1; i < this.records.length; i++) {
                  this.records[i]['open'] = false;
                }

                this.unit = [];
                this.records.forEach(record => {
                  // get unit array
                  this.unit.push(record.unit);
                  // control chart display
                  if (record.unit.length != 0) this.showChart = true;
                });

              }
              this.data = this.records;
              console.log(this.data);
              if (this.data.length != 0) this.drawcanvas();
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
            this.hrp.deleteLabTest(this.auth.userId, i, j)
              .subscribe(res => this.presentToast('Delete successfully.'),
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
