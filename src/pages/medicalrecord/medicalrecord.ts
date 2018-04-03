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
  tiles : any[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public mcp: MedicalClassificationProvider
  ) {
    this.tiles = mcp.getMain();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalrecordPage');
  }

}
