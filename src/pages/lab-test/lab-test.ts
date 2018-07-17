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

    // set an empty array with 26 initials.
    for (let i = 0; i < 26; i++) {
      this.list.push({ initial: String.fromCharCode(65 + i), category: new Array(0) });
    }
    console.log(this.list);

    // get common lab test list
    this.hrp.getLabTestCategory()
      .subscribe(list => {
        console.log(list);
        list.forEach(title => {
          // insert each category into corresponding initial
          if (title.name.charCodeAt(0) > 90) {
            this.list[title.name.charCodeAt(0) - 97].category.push(title);
          } else {
            this.list[title.name.charCodeAt(0) - 65].category.push(title);
          }
        });
        // delete empty initials
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
      'subtest': this.list[i].category[j].subtest
    });
  }

  goToOtherTest() {
    this.navCtrl.push(LabTestDetailPage, {
      'id': 0,
      'title': 'Other Tests',
      'subtest': []
    });
  }

  // goToHome(ev) {
  //   this.navCtrl.setRoot(DashboardPage);
  //   this.navCtrl.popToRoot();
  // }

}
