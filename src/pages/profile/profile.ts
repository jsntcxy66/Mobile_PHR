import { Subpages } from './../../shared/subpages';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProfileEditablePage } from '../profile-editable/profile-editable';
import { UserProvider } from '../../providers/user/user';

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
  userId: number;
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private userProvider: UserProvider) {

    this.userId = 1;

    //get profile from database
    this.userProvider.getProfile(this.userId)
      .subscribe(profile => this.profile = profile,
        errmess => this.errMess = <any>errmess);

    // this.profile = {
    //   username: "km111",
    //   firstname: "Kelly",
    //   lastname: "Marsh",
    //   gender: "male",
    //   email: "KellyM@gmail.com",
    //   tel: "4125890011",
    //   address: "100 Fifth Ave",
    //   birthday: "11/11/1911"
    // };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editProfile() {
    let modal = this.modalCtrl.create(ProfileEditablePage);
    modal.present();
    modal.onDidDismiss(() => {
      console.log("edit profile");
    });
  }

  resetPassword() {

  }

}
