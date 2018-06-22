import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ProfileEditablePage } from '../profile-editable/profile-editable';
import { UserProvider } from '../../providers/user/user';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile: any = {};
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private userProvider: UserProvider,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    //get profile from database
    this.userProvider.getProfile(this.auth.userId)
      .subscribe(profile => this.profile = profile,
        errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editProfile() {
    let modal = this.modalCtrl.create(ProfileEditablePage);
    modal.present();
    modal.onWillDismiss(
      () => {
        this.userProvider.getProfile(this.auth.userId)
          .subscribe(profile => this.profile = profile,
            errmess => this.errMess = <any>errmess);
      }
    );
  }

  editPassword() {

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

}
