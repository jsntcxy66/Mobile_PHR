import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ProfileEditablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-editable',
  templateUrl: 'profile-editable.html',
})
export class ProfileEditablePage {

  errMess: string;
  profileForm: FormGroup;
  profile: any = {};
  formErrors = {
    "firstname": '',
    "lastname": '',
    "email": '',
    "tel": '',
    "birthday": ''
  };
  validationMessages = {
    "firstname": {
      "minlength": "Firstname must be at least 2 characters long.",
      "maxlength": "Firstname cannot be more than 25 characters long."
    },
    "lastname": {
      "minlength": "Lastname must be at least 2 characters long.",
      "maxlength": "Lastname cannot be more than 25 characters long."
    },
    "email": {
      "required": "Email is required.",
      "email": "Please enter a valid email address."
    },
    "tel": {
      "pattern": "Please enter a valid 10-digit phone number. For example: 4123456789."
    },
    "birthday": {
      "pattern": "Please enter your birthday in MM/DD/YYYY format."
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private userProvider: UserProvider,
    private auth: AuthServiceProvider) {

    // this.profile = {
    //   username: "km111",
    //   firstname: "Kelly",
    //   lastname: "Marsh",
    //   gender: "male",
    //   email: "KellyM@gmail.com",
    //   tel: "4125890011",
    //   address: "100 Fifth Ave\nApt 119",
    //   birthday: "11/11/1911",
    //   race: "White"
    // };

    // get profile from database
    this.userProvider.getProfile(this.auth.userId)
      .subscribe(profile => this.profile = profile,
        errmess => this.errMess = <any>errmess);

    this.profileForm = this.fb.group({
      firstname: ['', [Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.minLength(2), Validators.maxLength(25)]],
      gender: [this.profile.gender],
      race: [this.profile.race],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.pattern('[0-9]{10}')],
      address: [''],
      birthday: ['', Validators.pattern('(^(((0[1-9]|1[012])/(0[1-9]|1[0-9]|2[0-8]))|((0[13578]|1[02])/(29|30|31))|((0[469]|11)/(29|30)))/(19|20)\\d\\d$)|(^02/29/(19(04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)|20(([02468][048])|([13579][26])))$)')]
    });
    this.profileForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileEditablePage');
  }

  onValueChanged(data?: any) {
    if (!this.profileForm) { return; }
    const form = this.profileForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    let profile = this.profileForm.value;
    console.log(profile);
    // post edited profile
    this.userProvider.editProfile(this.auth.userId, profile)
      .subscribe(
        profile => {
          this.toastCtrl.create({
            message: 'Successfully edited.',
            position: 'bottom',
            duration: 2000
          }).present();
          this.viewCtrl.dismiss();
        },
        error => {
          this.toastCtrl.create({
            message: 'Failed to edit.',
            position: 'bottom',
            duration: 2000
          }).present();
        }
      );
  }
}
