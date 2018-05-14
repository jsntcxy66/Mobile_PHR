import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  ionViewDidEnter() {
    this.menuCtrl.swipeEnable(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.swipeEnable(true);
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

}
