import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImmunizationPage } from '../immunization/immunization';

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

  records: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //get records
    this.records = [
      {
        vaccine: 'MMR',
        schedule: '1 or 2 doses depending on indication',
        ageGroup: 'Adult',
        date: '2018/02/08'
      },
      {
        vaccine: 'Influenza',
        schedule: 'Annual vaccination (IIV) 1 or 2 doses',
        ageGroup: 'Child and Adolescent',
        date: '2018/04/15'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImmunizationHistoryPage');
  }

  addImmunization() {
    this.navCtrl.push(ImmunizationPage);
  }
}
