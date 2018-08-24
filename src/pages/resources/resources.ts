import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ResourcesAddResourcesPage } from '../resources-add-resources/resources-add-resources';
import { ResourcesProvider } from './../../providers/resources/resources';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';

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

  errMess: string;
  resources: any[] = [];
  customizeResources: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private iab: InAppBrowser,
    private modalCtrl: ModalController,
    private resourcesProvider: ResourcesProvider,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    this.resources = [
      {
        title: "Immunization Schedules",
        url: "https://www.cdc.gov/vaccines/schedules/index.html"
      },
      {
        title: "Weight Management",
        url: "https://www.nutrition.gov/weight-management"
      },
      {
        title: "Physical Activity Guidelines",
        url: "https://health.gov/paguidelines/"
      },
      {
        title: "Lab Tests",
        url: "https://labtestsonline.org/"
      },
      {
        title: "Lab Test Reference Ranges",
        url: "http://laboratory.uchealth.com/tests/reference-ranges-pdf/"
      }
    ];

    //get customize resources
    this.resourcesProvider.getResources(this.auth.userId)
      .subscribe(resources => this.customizeResources = resources,
        errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResourcesPage');
  }

  openLink(i) {
    this.iab.create(this.resources[i].url, '_system', 'location=yes');
  }

  openCustomizeLink(j) {
    this.iab.create('//' + this.customizeResources[j].url, '_system', 'location=yes');
  }

  addResource() {
    let modal = this.modalCtrl.create(ResourcesAddResourcesPage);
    modal.present();
    modal.onWillDismiss(
      () => {
        this.resourcesProvider.getResources(this.auth.userId)
          .subscribe(resources => this.customizeResources = resources,
            errmess => this.errMess = <any>errmess);
      }
    );
  }

  deleteRecord(j) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this link?',
      enableBackdropDismiss: true,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.resourcesProvider.deleteResource(this.auth.userId, j)
              .subscribe(res => {
                this.presentToast('Delete successfully.');
                this.resourcesProvider.getResources(this.auth.userId)
                  .subscribe(resources => this.customizeResources = resources,
                    errmess => this.errMess = <any>errmess);
              },
                err => this.presentToast('Error: ' + err));
          }
        }
      ]
    });
    alert.present();
  }

  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Oops!',
      message: msg,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.push(WelcomePage);
          }
        }
      ]
    });
    alert.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: false
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}
