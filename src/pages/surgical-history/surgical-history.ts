import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SurgicalHistoryDetailPage } from '../surgical-history-detail/surgical-history-detail';

/**
 * Generated class for the SurgicalHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-surgical-history',
  templateUrl: 'surgical-history.html',
})
export class SurgicalHistoryPage {

  records: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController) {

    // get sorted records
    this.records = [
      {
        sugery: 'appendectomy',
        doctor: 'Aaric Falconi',
        date: '2018/04/26'
      },
      {
        sugery: 'arthrodesis',
        doctor: 'Scott Williamson',
        date: '2017/09/11'
      }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurgicalHistoryPage');
  }

  addSurgicalHistory() {
    let modal = this.modalCtrl.create(SurgicalHistoryDetailPage);
    modal.present();
  }
}
