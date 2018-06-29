import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html',
})
export class ResourcesPage {

  resources: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private iab: InAppBrowser) {

    this.resources = [
      {
        title: "Immunization Schedules",
        link: "https://www.cdc.gov/vaccines/schedules/index.html"
      },
      {
        title: "Weight Management",
        link: "https://www.nutrition.gov/weight-management"
      },
      {
        title: "Physical Activity Guidelines",
        link: "https://health.gov/paguidelines/"
      },
      {
        title: "Lab Tests",
        link: "https://labtestsonline.org/"
      },
      {
        title: "Lab Test Reference Ranges",
        link: "http://laboratory.uchealth.com/tests/reference-ranges-pdf/"
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResourcesPage');
  }

  openLink(i) {
    this.iab.create(this.resources[i].link, '_blank', 'location=yes');
  }

}
