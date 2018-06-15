import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialHistoryClassificationProvider } from '../../providers/social-history-classification/social-history-classification';

/**
 * Generated class for the SocialHistoryCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social-history-category',
  templateUrl: 'social-history-category.html',
})
export class SocialHistoryCategoryPage {

  tiles: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private scp: SocialHistoryClassificationProvider) {

    // get Main Menu
    this.tiles = this.scp.getMenu(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialHistoryCategoryPage');
  }

}
