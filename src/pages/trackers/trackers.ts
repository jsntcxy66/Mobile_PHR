import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CustomPanelPage } from './../custom-panel/custom-panel';
import { CustomtrackerPage } from './../customtracker/customtracker';
import { DashboardPage } from '../dashboard/dashboard';
import { TrackerDetailPage } from '../tracker-detail/tracker-detail';

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
    food: true,
    exercise: true,
    weight: true,
    height: true
  };
  trackers: Array<{ id: number, name: string, icon: string }> = [
    { id: 1, name: 'food', icon: 'restaurant'},
    { id: 2, name: 'exercise', icon: 'walk'},
    { id: 3, name: 'weight', icon: 'speedometer'},
    { id: 4, name: 'height', icon: 'speedometer'}
  ];
  customtrackers: Array<{ id: number, name: string, icon: string }> = this.trackers;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private popoverCtrl: PopoverController,
    private storage: Storage) {

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

  selectTracker(i: number) {
    this.navCtrl.push(TrackerDetailPage,
      {
        'id': this.trackers[i].id,
        'title': this.trackers[i].name
      });
    // this.navCtrl.push(this.customtrackers[index].component);
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(CustomPanelPage, this.panels);
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

  ionViewDidEnter() {
    console.log("DidEnter");
    this.storage.get('mytracker').then(mytracker => {
      if (mytracker != null) {
        for (let trackers of this.customtrackers) {
          if (trackers.name == mytracker.name) {
            return;
          }
        }
        this.customtrackers.push({
          id: 5,
          name: mytracker.name,
          icon: 'analytics'
        });
      }
    });
  }

  goToHome(ev) {
    this.navCtrl.setRoot(DashboardPage);
    this.navCtrl.popToRoot();
  }
}
