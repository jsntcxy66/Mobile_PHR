import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllergyClassificationProvider } from './../../providers/allergy-classification/allergy-classification';

/**
 * Generated class for the AllergyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allergy',
  templateUrl: 'allergy.html',
})
export class AllergyPage {

  tiles: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private acp: AllergyClassificationProvider) {
    // get Main Menu
    this.tiles = acp.getMenu(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllergyPage');
  }

}
