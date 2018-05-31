import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MedicationDetailPage } from '../medication-detail/medication-detail';

/**
 * Generated class for the MedicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medication',
  templateUrl: 'medication.html',
})
export class MedicationPage {

  records: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController) {

    //get records
    this.records = [
      {
        name: 'Aspirin',
        frequency: 'Take 1 with food',
        date: '2018/02/08'
      },
      {
        name: 'Lyrica',
        frequency: '75mg, Take 1 with food',
        date: '2018/04/03'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicationPage');
  }

  addMedication() {
    let modal = this.modalCtrl.create(MedicationDetailPage);
    modal.present();
  }

}
