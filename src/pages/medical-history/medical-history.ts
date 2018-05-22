import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MedicalHistoryDetailPage } from '../medical-history-detail/medical-history-detail';

/**
 * Generated class for the MedicalHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medical-history',
  templateUrl: 'medical-history.html',
})
export class MedicalHistoryPage {

  records: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController) {

    // get sorted records
    this.records = [
      {
        diagnosis: 'diabetes',
        date: '2008/08/26'
      },
      {
        diagnosis: 'hypertension',
        date: '2017/02/19'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalHistoryPage');
  }

  addMedicalHistory() {
    let modal = this.modalCtrl.create(MedicalHistoryDetailPage);
    modal.present();
  }

}
