import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { PasswordRetrievePage } from '../password-retrieve/password-retrieve';

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
    private menuCtrl: MenuController,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

  resetPassword() {
    let modal = this.modalCtrl.create(PasswordRetrievePage, {
      'id': 0,
      'type': 'reset'
    });
    modal.present();
  }

}
