import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicalClassificationProvider } from '../../providers/medical-classification/medical-classification';
import { DashboardPage } from '../dashboard/dashboard';

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
    // get default Main Menu
    this.tiles = mcp.getMenu(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalrecordPage');
  }

  goToHome(ev) {
    this.navCtrl.setRoot(DashboardPage);
    this.navCtrl.popToRoot();
  }

}
