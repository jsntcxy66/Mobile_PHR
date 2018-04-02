import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';

import { CustomtrackerPage } from './../customtracker/customtracker';

/**
 * Generated class for the CreateTrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-tracker',
  templateUrl: 'create-tracker.html',
})
export class CreateTrackerPage {

  tracker: FormGroup;
  mytracker: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder,
    public viewCtrl: ViewController,
    private storage: Storage,
    private appCtrl: App) {

    this.tracker = this.fb.group({
      name: ['', Validators.required],
      time: true
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTrackerPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.mytracker = {
      name: this.tracker.value.name,
      time: this.tracker.value.time
    }
    this.viewCtrl.dismiss(this.mytracker);
    this.storage.get('panels').then(panels => {
      let newpanels = panels;
      newpanels["mytracker"] = true;
      this.storage.set('panels', newpanels);
    });
    this.appCtrl.getRootNav().push(CustomtrackerPage);
  }

}
