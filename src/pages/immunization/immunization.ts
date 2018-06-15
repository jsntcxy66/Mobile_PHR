import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImmunizationClassificationProvider } from './../../providers/immunization-classification/immunization-classification';

/**
 * Generated class for the ImmunizationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-immunization',
  templateUrl: 'immunization.html',
})
export class ImmunizationPage {

  tiles: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private icp: ImmunizationClassificationProvider) {
    this.tiles = this.icp.getMenu(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImmunizationPage');
  }

}
