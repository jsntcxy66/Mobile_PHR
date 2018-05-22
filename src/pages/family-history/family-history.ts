import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FamilyHistoryDetailPage } from '../family-history-detail/family-history-detail';

/**
 * Generated class for the FamilyHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-family-history',
  templateUrl: 'family-history.html',
})
export class FamilyHistoryPage {

  records: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController) {

    // get sorted records
    this.records = [
      {
        relationship: 'Father',
        name: 'Martin Perkins',
        alive: true,
        disease: 'diabetes',
        date: '2008/08/26'
      },
      {
        relationship: 'Sister',
        name: 'Ross Perkins',
        alive: true,
        disease: 'hypertension',
        date: '2017/02/19'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyHistoryPage');
  }

  addFamilyHistory() {
    let modal = this.modalCtrl.create(FamilyHistoryDetailPage);
    modal.present();
  }

}
