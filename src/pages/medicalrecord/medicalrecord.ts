import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicalClassificationProvider } from '../../providers/medical-classification/medical-classification';

/**
 * Generated class for the MedicalrecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicalrecord',
  templateUrl: 'medicalrecord.html',
  providers: [MedicalClassificationProvider]
})
export class MedicalrecordPage {

  tiles: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mcp: MedicalClassificationProvider
  ) {
    // get Main Menu
    this.tiles = mcp.getMenu(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalrecordPage');
  }

}
