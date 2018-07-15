import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController, ModalController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TrackerDetailPage } from '../tracker-detail/tracker-detail';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the TrackersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trackers',
  templateUrl: 'trackers.html',
})
export class TrackersPage {

  panels = {
    "food": true,
    "drink": true,
    "weight": true,
    "height": true,
    "sleep": true,
    "exercise": true,
    "blood pressure": true,
    "blood sugar": true,
    "pain": true,
    "health log": true,
    "mood": true,
    "period": true
  };
  trackers: Array<{ id: number, name: string, icon: string }> = [
    { id: 1, name: 'food', icon: "fas fa-utensils" },
    { id: 2, name: 'drink', icon: "fas fa-glass-martini" },
    { id: 3, name: 'weight', icon: "fas fa-weight" },
    { id: 4, name: 'height', icon: "fas fa-male" },
    { id: 5, name: 'sleep', icon: "far fa-clock" },
    { id: 6, name: 'exercise', icon: "fas fa-basketball-ball" },
    { id: 7, name: 'blood pressure', icon: "far fa-chart-bar" },
    { id: 8, name: 'blood sugar', icon: "far fa-chart-bar" },
    { id: 9, name: 'pain', icon: "fas fa-diagnoses" },
    { id: 10, name: 'health log', icon: "fas fa-briefcase-medical" },
    { id: 11, name: 'mood', icon: "far fa-heart" },
    { id: 12, name: 'period', icon: "fas fa-venus" }
  ];
  customtrackers: Array<{ id: number, name: string, icon: string }> = this.trackers;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private popoverCtrl: PopoverController,
    private alertCtrl: AlertController,
    private storage: Storage,
    private auth: AuthServiceProvider) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    this.storage.get('panels').then(panels => {
      if (panels) {
        this.panels = panels;
      }
      console.log(this.panels);
      this.customtrackers = [];
      let keys = Object.keys(this.panels);
      let values = new Array;
      keys.forEach(key => {
        values.push(this.panels[key]);
      });
      for (let i = 0; i < keys.length; i++) {
        if (values[i] == true) {
          this.trackers.forEach(tracker => {
            if (tracker.name == keys[i]) {
              this.customtrackers.push(tracker);
            }
          });
        }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackersPage');
  }

  selectTracker(id: number) {
    this.navCtrl.push(TrackerDetailPage,
      {
        'id': id,
        'title': this.trackers[id - 1].name
      });
    // this.navCtrl.push(this.customtrackers[index].component);
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PanelPage, this.panels);
    popover.present({
      ev: ev
    });
    popover.onDidDismiss(panels => {
      if (panels != null) {
        this.panels = panels;
        this.customtrackers = [];
        let keys = Object.keys(this.panels);
        let values = new Array;
        keys.forEach(key => {
          values.push(this.panels[key]);
        });
        console.log(keys);
        console.log(values);
        for (let i = 0; i < keys.length; i++) {
          if (values[i] == true) {
            this.trackers.forEach(tracker => {
              if (tracker.name == keys[i]) {
                this.customtrackers.push(tracker);
              }
            });
            console.log(this.customtrackers);
          }
        }
        // for (let i = 0; i < keys.length; i++) {
        //   if (this.customtrackers[i].name == keys[i]) {

        //   }
        // }
      }
    });
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

  // ionViewDidEnter() {
  //   console.log("DidEnter");
  //   this.storage.get('mytracker').then(mytracker => {
  //     if (mytracker != null) {
  //       for (let trackers of this.customtrackers) {
  //         if (trackers.name == mytracker.name) {
  //           return;
  //         }
  //       }
  //       this.customtrackers.push({
  //         id: 13,
  //         name: mytracker.name,
  //         icon: 'analytics'
  //       });
  //     }
  //   });
  // }

}


@Component({
  template: `
  <form [formGroup]='custompanel' (ngSubmit)="onSubmit()">
    <ion-list no-lines>
      <ion-list-header>Custom Panel</ion-list-header>
      <ion-item *ngFor="let f of formgrouparray">
        <ion-label>{{f.name | titlecase}}</ion-label>
        <ion-checkbox formControlName="{{f.name}}"></ion-checkbox>
      </ion-item>
      <button ion-button clear type="submit">OK</button>
      <!-- <button ion-button clear (click)="createTracker()">Create My Tracker</button> -->
    </ion-list>
  </form>
  `
})
export class PanelPage {

  custompanel: FormGroup;
  panels: any;
  formgroupvalue: any;
  formgrouparray: Array<{ name: string, check: boolean }> = [];

  constructor(public navParams: NavParams,
    public viewCtrl: ViewController,
    private fb: FormBuilder,
    private storage: Storage,
    private modalCtrl: ModalController) {

    this.panels = this.navParams.data;
    console.log(this.panels);
    this.formgroupvalue = {
      "food": this.panels["food"],
      "drink": this.panels["drink"],
      "weight": this.panels["weight"],
      "height": this.panels["height"],
      "sleep": this.panels["sleep"],
      "exercise": this.panels["exercise"],
      "blood pressure": this.panels["blood pressure"],
      "blood sugar": this.panels["blood sugar"],
      "pain": this.panels["pain"],
      "health log": this.panels["health log"],
      "mood": this.panels["mood"],
      "period": this.panels["period"]

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

  onSubmit() {
    this.panels = this.custompanel.value;
    this.storage.set('panels', this.panels);
    console.log(this.panels);
    this.viewCtrl.dismiss(this.panels);
  }

}
