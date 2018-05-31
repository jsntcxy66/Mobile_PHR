// import { CustomtrackerPage } from './../customtracker/customtracker';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { CreateTrackerPage } from '../create-tracker/create-tracker';

/**
 * Generated class for the CustomPanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custom-panel',
  templateUrl: 'custom-panel.html',
})
export class CustomPanelPage {

  custompanel: FormGroup;
  panels: any;
  formgroupvalue: any;
  formgrouparray: Array<{ name: string, check: boolean }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder,
    public viewCtrl: ViewController,
    private storage: Storage,
    private modalCtrl: ModalController) {

    this.panels = navParams.data;
    this.formgroupvalue = {
      food: this.panels.food,
      exercise: this.panels.exercise,
      weight: this.panels.weight,
      height: this.panels.height
    };

    this.custompanel = this.fb.group(this.formgroupvalue);

    // let keys1 = Object.keys(this.formgroupvalue);
    this.storage.get('mytracker').then(mytracker => {
      if (mytracker != null) {
        this.formgroupvalue[mytracker.name] = true;
        console.log(this.formgroupvalue);
      }

      let keys = Object.keys(this.formgroupvalue);
      let values = new Array;
      keys.forEach(key => {
        values.push(this.formgroupvalue[key]);
      });
      for (var i = 0; i < keys.length; i++) {
        this.formgrouparray.push({
          name: keys[i],
          check: values[i]
        });
      }
      console.log(this.formgroupvalue);

      this.custompanel = this.fb.group(this.formgroupvalue);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomPanelPage');
  }

  onSubmit() {
    this.panels = this.custompanel.value;
    this.storage.set('panels', this.panels);
    console.log(this.panels);
    this.viewCtrl.dismiss(this.panels);
  }

  createTracker() {
    let modal = this.modalCtrl.create(CreateTrackerPage);
    modal.present();
    modal.onDidDismiss(mytracker => {
      console.log(mytracker);
      this.storage.set('mytracker', mytracker);
    });
  }
}
