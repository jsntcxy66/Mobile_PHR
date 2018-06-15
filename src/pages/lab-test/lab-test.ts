import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LabTestDetailPage } from '../lab-test-detail/lab-test-detail';
import { DashboardPage } from '../dashboard/dashboard';
import { TestResultsProvider } from '../../providers/test-results/test-results';

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
    private trp: TestResultsProvider) {

    // get common lab test list
    this.list = [
      {
        initial: "A",
        category: [
          {
            id: 1,
            name: "ANA",
            unit: "sss",
            isnumber: true,
            subtest: ["sss","sdsdas","sds"]
          }
        ]
      },
      {
        initial: "B",
        category: [
          {
            id: 2,
            name: "BMP (Basic Metabolic Panel)",
            unit: "sss",
            isnumber: false,
            subtest: ["sss","sdsdas","sds"]
          }
        ]
      },
      {
        initial: "C",
        category: [
          {
            id: 3,
            name: "CBC (Complete Blood Count)",
            unit: "sss",
            isnumber: true,
            subtest: ["sss","sdsdas","sds"]
          },
          {
            id: 4,
            name: "CMP (Comprehensive Metabolic Panel)",
            unit: "sss",
            isnumber: true,
            subtest: ["sss","sdsdas","sds"]
          }
        ]
      },
      {
        initial: "E",
        category: [
          {
            id: 5,
            name: "ESR (Sedimentation Rate)",
            unit: "sss",
            isnumber: true,
            subtest: ["sss","sdsdas","sds"]
          }
        ]
      },
      {
        initial: "F",
        category: [
          {
            id: 6,
            name: "Flu (Influenza A and B Screen)",
            unit: "sss",
            isnumber: true,
            subtest: ["sss","sdsdas","sds"]
          }
        ]
      },
      {
        initial: "G",
        category: [
          {
            id: 7,
            name: "Glycohemoglobin (Hemoglobin A1C)",
            unit: "sss",
            isnumber: true,
            subtest: ["sss","sdsdas","sds"]
          },
          {
            id: 8,
            name: "Glucose Level",
            unit: "sss",
            isnumber: true,
            subtest: ["sss","sdsdas","sds"]
          }
        ]
      },
      {
        initial: "H",
        category: [
          {
            id: 9,
            name: "hCG",
            unit: "sss",
            isnumber: true,
            subtest: ["sss","sdsdas","sds"]
          },
          {
            id: 10,
            name: "HIV Antibody (HIV 1/2 Ag/Ab 4th Generation with Reflex)",
            unit: "sss",
            isnumber: true,
            subtest: ["sss","sdsdas","sds"]
          }
        ]
      },
      {
        initial: "L",
        category: [
          {
            id: 10,
            name: "Lipid Panel (or Lipid Profile)",
            unit: "sss",
            isnumber: true,
            subtest: ["sss","sdsdas","sds"]
          },
          {
            id: 11,
            name: "Liver Function Panel (LFT)",
            unit: "sss",
            isnumber: true,
            subtest: ["sss","sdsdas","sds"]
          },
          {
            id: 12,
            name: "Lyme Antibody w/Reflex Immunoblot",
            unit: "sss",
            isnumber: true,
            subtest: ["sss","sdsdas","sds"]
          }
        ]
      }
      // {
      //   sutest: "sss",
      //   result: [
      //     {
      //       data: 2123,
      //       date: "2018/06/01"
      //     },
      //     {
      //       data: 2123,
      //       date: "2018/06/01"
      //     }
      //   ]
      // },
    ];

    this.trp.getLabTestCategory()
      .subscribe(list => this.list = list,
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
      'subtest': this.list[i].category[j].subtest
    });
  }

  goToOtherTest() {
    this.navCtrl.push(LabTestDetailPage, {
      'id': -1,
      'title': 'Other Tests'
    });
  }

  goToHome(ev) {
    this.navCtrl.setRoot(DashboardPage);
    this.navCtrl.popToRoot();
  }

}
