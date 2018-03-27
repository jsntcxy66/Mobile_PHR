import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder,
    public viewCtrl: ViewController,
    private storage: Storage) {

      this.panels = navParams.data;
      this.custompanel = this.fb.group({
        food: this.panels.food,
        alcohol: this.panels.alcohol,
        exercise: this.panels.exercise,
        weight: this.panels.weight,
        medication: this.panels.medication,
        vaccination: this.panels.vaccination
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
}
