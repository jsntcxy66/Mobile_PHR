import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ImmunizationPage } from '../immunization/immunization';
import { WelcomePage } from '../welcome/welcome';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HealthRecordsProvider } from '../../providers/health-records/health-records';

/**
 * Generated class for the ImmunizationHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-immunization-history',
  templateUrl: 'immunization-history.html',
})
export class ImmunizationHistoryPage {

  errMess: string;
  records: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private hrp: HealthRecordsProvider) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    // this.records = [
    //   {
    //     vaccine: 'MMR',
    //     schedule: '1 or 2 doses depending on indication',
    //     ageGroup: 'Adult',
    //     date: '2018/02/08',
    //     age: 30
    //   },
    //   {
    //     vaccine: 'Influenza',
    //     schedule: 'Annual vaccination (IIV) 1 or 2 doses',
    //     ageGroup: 'Child and Adolescent',
    //     date: '2018/04/15',
    //     age: 12
    //   }
    // ];

    // get records
    this.hrp.getImmunization(this.auth.userId)
      .subscribe(records => {
        this.records = records;
        this.records.forEach(record => {
          if (record.age > 18)
            record['ageGroup'] = "Adult";
          else
            record['ageGroup'] = "Child and Adolescent";
        });
      },
        errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImmunizationHistoryPage');
  }

  ionViewWillEnter() {
    this.hrp.getImmunization(this.auth.userId)
      .subscribe(records => {
        this.records = records;
        this.records.forEach(record => {
          if (record.age > 18)
            record['ageGroup'] = "Adult";
          else
            record['ageGroup'] = "Child and Adolescent";
        });
      },
        errmess => this.errMess = <any>errmess);
  }

  addImmunization() {
    this.navCtrl.push(ImmunizationPage);
  }

  deleteRecord(i) {
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
            this.hrp.deleteImmunization(this.auth.userId, i)
              .subscribe(res => {
                this.presentToast('Delete successfully.');
                this.hrp.getImmunization(this.auth.userId)
                  .subscribe(records => {
                    this.records = records;
                    this.records.forEach(record => {
                      if (record.age > 18)
                        record['ageGroup'] = "Adult";
                      else
                        record['ageGroup'] = "Child and Adolescent";
                    });
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
