import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllergyPage } from '../allergy/allergy';

/**
 * Generated class for the AllergyHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allergy-history',
  templateUrl: 'allergy-history.html',
})
export class AllergyHistoryPage {

  records: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // get sorted records
    this.records = [
      {
        category: 'Food Allergy',
        trigger: 'Eggs',
        symptom: 'Shortness of breath',
        threatening: true,
        date: '2018/01/09'
      },
      {
        category: 'Pet Allergy',
        trigger: 'Cat',
        symptom: 'Sneezing',
        threatening: false,
        date: '2017/10/21'
      },
      {
        category: 'Drug Allergy',
        trigger: 'Penicillin and related antibiotics',
        symptom: 'Skin rash',
        threatening: false,
        date: '2017/12/12'
      }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllergyHistoryPage');
  }

  checkLifeThreatening(i): boolean {
    return this.records[i].threatening;
  }

  addAllergy() {
    this.navCtrl.push(AllergyPage);
  }
}
