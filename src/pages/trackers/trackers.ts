import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodtrackerPage } from './../foodtracker/foodtracker';

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

  foodtracker: FoodtrackerPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackersPage');
  }

  selectTracker(page) {
    this.navCtrl.push(FoodtrackerPage);
  }
}
