import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicalClassificationProvider } from '../../providers/medical-classification/medical-classification';
import { DashboardPage } from '../dashboard/dashboard';
import { MedicalRecordDetailPage } from './../medical-record-detail/medical-record-detail';

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
  list: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mcp: MedicalClassificationProvider
  ) {
    // get default Main Menu
    // this.tiles = mcp.getMenu(0);

    this.list = [
      {
        initial: "A",
        category: ["ANA", "Antigenic"]
      },
      {
        initial: "B",
        category: ["BMP (Basic Metabolic Panel)"]
      },
      {
        initial: "C",
        category: ["CBC (Complete Blood Count)", "CMP (Comprehensive Metabolic Panel)"]
      },
      {
        initial: "E",
        category: ["ESR (Sedimentation Rate)"]
      },
      {
        initial: "F",
        category: ["Flu (Influenza A and B Screen)"]
      },
      {
        initial: "G",
        category: ["Glycohemoglobin (Hemoglobin A1C)", "Glucose Level"]
      },
      {
        initial: "H",
        category: ["hCG", "HIV Antibody (HIV 1/2 Ag/Ab 4th Generation with Reflex)"]
      },
      {
        initial: "L",
        category: ["Lipid Panel (or Lipid Profile)", "Liver Function Panel (LFT)", "Lyme Antibody w/Reflex Immunoblot"]
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalrecordPage');
  }

  goToCategory(i, j) {
    this.navCtrl.push(MedicalRecordDetailPage, {
      'id': j,
      'title': this.list[i].category[j]
    });
  }

  goToOtherTest() {
    this.navCtrl.push(MedicalRecordDetailPage, {
      'id': 0,
      'title': 'Other Tests'
    });
  }

  goToHome(ev) {
    this.navCtrl.setRoot(DashboardPage);
    this.navCtrl.popToRoot();
  }

}
