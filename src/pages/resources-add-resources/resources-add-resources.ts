import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ResourcesProvider } from '../../providers/resources/resources';

/**
 * Generated class for the ResourcesAddResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resources-add-resources',
  templateUrl: 'resources-add-resources.html',
})
export class ResourcesAddResourcesPage {

  newResourceForm: FormGroup;
  loading: any;

  formErrors = {
    "title": '',
    "url": ''
  };
  validationMessages = {
    "title": {
      "required": "Name is required.",
    },
    "url": {
      "required": "URL is required.",
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private auth: AuthServiceProvider,
    private resourcesProvider: ResourcesProvider) {

    this.newResourceForm = this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required]
    });
    this.newResourceForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResourcesAddResourcesPage');
  }


  onValueChanged(data?: any) {
    if (!this.newResourceForm) { return; }
    const form = this.newResourceForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.showLoader('Adding...');
    let url = this.newResourceForm.value.url;
    let payload = this.newResourceForm.value;
    // delete "https" or "http" in url
    if (url.indexOf("https://") != -1) {
      payload["url"] = url.substr(8);
    } else if (url.indexOf("http://") != -1) {
      payload["url"] = url.substr(7);
    }
    console.log(payload);
    // post new resource info
    this.resourcesProvider.addResource(this.auth.userId, payload)
      .subscribe(
        resource => {
          this.loading.dismiss();
          this.presentToast('Successfully added a new resource.');
          this.viewCtrl.dismiss();
        },
        error => {
          this.loading.dismiss();
          this.presentToast('Failed to add a new resource.');
        }
      );
  }

  showLoader(msg) {
    this.loading = this.loadingCtrl.create({
      content: msg
    });
    this.loading.present();
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
