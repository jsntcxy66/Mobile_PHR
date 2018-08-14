import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the PasswordEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password-edit',
  templateUrl: 'password-edit.html',
})
export class PasswordEditPage {

  editpasswordForm: FormGroup;
  loading: any;
  formErrors = {
    "currentPassword": '',
    "newPassword": '',
    "confirmPassword": ''
  };
  validationMessages = {
    "currentPassword": {
      "required": "Current password is required."
    },
    "newPassword": {
      "required": "New password is required.",
      "pattern": "Password must be 8-17 characters long and contains at least one number, one letter and one unique character such as !@#$%^&*?\"';:"
    },
    "confirmPassword": {
      "required": "Please enter your password again.",
      "notEquivalent": "Password doesn't match."
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder,
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private auth: AuthServiceProvider) {

    this.editpasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[\!\@\#\$\%\^\&\*\?\"\'\;\:]).*$')]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.pwdMatchValidator('newPassword', 'confirmPassword')});
    this.editpasswordForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordEditPage');
  }

  onValueChanged(data?: any) {
    if (!this.editpasswordForm) { return; }
    const form = this.editpasswordForm;

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

  pwdMatchValidator(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true })
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.showLoader('Editing...');
    let payload = this.editpasswordForm.value;
    delete payload.confirmPassword;
    console.log(payload);
    this.auth.editPassword(this.auth.userId, payload)
      .subscribe(
        res => {
          if (res == -1) {
            this.loading.dismiss();
            this.presentToast("Wrong password.");
          } else {
            this.loading.dismiss();
            this.presentToast('Successfully edited!');
            this.viewCtrl.dismiss();
          }
        },
        err => {
          this.loading.dismiss();
          this.presentToast('Error: ' + err);
        }
      );
  }

  showLoader(msg) {
    this.loading = this.loadingCtrl.create({
      content: msg
    });
    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: false
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}
