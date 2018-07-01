import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LabTestDetailPage } from '../lab-test-detail/lab-test-detail';
import { HealthRecordsProvider } from '../../providers/health-records/health-records';

/**
 * Generated class for the LabTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-test',
  templateUrl: 'lab-test.html',
})
export class LabTestPage {

  list: any[] = [];
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private hrp: HealthRecordsProvider) {

    // get common lab test list
    
    // let list = [
    //   {
    //     id: 1,
    //     name: "ANA",
    //     subset: ["ANA"]
    //   }
    // ];
    let list = [
      {
        id: 1,
        name: "ANA",
        unit: "",
        isnumber: false,
        subtest: ["AAA"]
      },
      {
        id: 2,
        name: "BMP (Basic Metabolic Panel)",
        unit: "mg/dL",
        isnumber: true,
        subtest: ["BMP (Basic Metabolic Panel)", "BMP (Basic Metabolic Panel) (Other)"]
      },
      {
        id: 3,
        name: "CBC (Complete Blood Count)",
        unit: "K/mcL",
        isnumber: true,
        subtest: ["CBC (Complete Blood Count)"]
      },
      {
        id: 4,
        name: "CMP (Comprehensive Metabolic Panel)",
        unit: "mg/dL",
        isnumber: true,
        subtest: ["CMP (Comprehensive Metabolic Panel)"]
      },
      {
        id: 5,
        name: "ESR (Sedimentation Rate)",
        unit: "mg/dL",
        isnumber: true,
        subtest: ["ESR (Sedimentation Rate)"]
      },
      {
        id: 6,
        name: "Flu (Influenza A and B Screen)",
        unit: "mg/dL",
        isnumber: true,
        subtest: ["Flu (Influenza A and B Screen)"]
      },
      {
        id: 7,
        name: "Glycohemoglobin (Hemoglobin A1C)",
        unit: "mg/dL",
        isnumber: true,
        subtest: ["Glycohemoglobin (Hemoglobin A1C)"]
      },
      {
        id: 8,
        name: "Glucose Level",
        unit: "mg/dL",
        isnumber: true,
        subtest: ["Glucose Level"]
      },
      {
        id: 9,
        name: "HCG",
        unit: "mg/dL",
        isnumber: true,
        subtest: ["HCG"]
      },
      {
        id: 10,
        name: "HIV Antibody (HIV 1/2 Ag/Ab 4th Generation with Reflex)",
        unit: "mg/dL",
        isnumber: true,
        subtest: ["HIV Antibody (HIV 1/2 Ag/Ab 4th Generation with Reflex)"]
      },
      {
        id: 11,
        name: "Lipid Panel (or Lipid Profile)",
        unit: "mg/dL",
        isnumber: true,
        subtest: ["Lipid Panel (or Lipid Profile)"]
      },
      {
        id: 12,
        name: "Liver Function Panel (LFT)",
        unit: "mg/dL",
        isnumber: true,
        subtest: ["Liver Function Panel (LFT)"]
      },
      {
        id: 13,
        name: "Lyme Antibody w/Reflex Immunoblot",
        unit: "mg/dL",
        isnumber: true,
        subtest: ["Lyme Antibody w/Reflex Immunoblot"]
      },
      {
        id: 14,
        name: "PTT (Partial Thromboplastin Time)",
        unit: "mg/dL",
        isnumber: true,
        subtest: ["PTT (Partial Thromboplastin Time)"]
      },
      {
        id: 15,
        name: "Microalbumin, Urine",
        unit: "mg/dL",
        isnumber: true,
        subtest: []
      },
      {
        id: 16,
        name: "Mono",
        unit: "mg/dL",
        isnumber: true,
        subtest: []
      },
      {
        id: 17,
        name: "Pap Smear",
        unit: "mg/dL",
        isnumber: true,
        subtest: []
      },
      {
        id: 18,
        name: "PSA (Prostate Specific Antigen)",
        unit: "mg/dL",
        isnumber: true,
        subtest: []
      },
      {
        id: 19,
        name: "PT (Protime)",
        unit: "mg/dL",
        isnumber: true,
        subtest: []
      },
      {
        id: 20,
        name: "Semen Analysis",
        unit: "mg/dL",
        isnumber: true,
        subtest: []
      },
      {
        id: 21,
        name: "Stool Culture",
        unit: "mg/dL",
        isnumber: true,
        subtest: []
      },
      {
        id: 22,
        name: "TSH, High Sensitivity (Thyroid Stimulating Hormone)",
        unit: "mg/dL",
        isnumber: true,
        subtest: []
      },
      {
        id: 23,
        name: "Uric Acid",
        unit: "mg/dL",
        isnumber: true,
        subtest: []
      },
      {
        id: 24,
        name: "Urinalysis",
        unit: "mg/dL",
        isnumber: true,
        subtest: []
      },
      {
        id: 25,
        name: "Urine Culture",
        unit: "mg/dL",
        isnumber: true,
        subtest: []
      },
    ];

    for (let i = 0; i < 26; i++) {
      this.list.push({ initial: String.fromCharCode(65 + i), category: new Array(0) });
    }

    list.forEach(category => {
      this.list[category.name.charCodeAt(0) - 65].category.push(category);
    });

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].category.length == 0) {
        this.list.splice(i, 1);
        i--;
      }
    }

    this.hrp.getLabTestCategory()
      .subscribe(list => {
        list.forEach(category => {
          this.list[category.name.charCodeAt(0) - 65].category.push(category);
        });
        
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].category.length == 0) {
            this.list.splice(i, 1);
            i--;
          }
        }
      },
        errmess => this.errMess = <any>errmess);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabTestPage');
  }

  goToCategory(i, j) {
    this.navCtrl.push(LabTestDetailPage, {
      'id': this.list[i].category[j].id,
      'title': this.list[i].category[j].name,
      'unit': this.list[i].category[j].unit,
      'isnumber': this.list[i].category[j].isnumber,
      'subtest': this.list[i].category[j].subtest,
      'tab': 'form'
    });
  }

  goToOtherTest() {
    this.navCtrl.push(LabTestDetailPage, {
      'id': 0,
      'title': 'Other Tests',
      'unit': "",
      'isnumber': false,
      'subtest': [],
      'tab': 'form'
    });
  }

  // goToHome(ev) {
  //   this.navCtrl.setRoot(DashboardPage);
  //   this.navCtrl.popToRoot();
  // }

}
