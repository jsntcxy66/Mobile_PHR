import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the PasswordResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password-reset',
  templateUrl: 'password-reset.html',
})
export class PasswordResetPage {

  userId: number;
  emailAddress: string = '';
  securityQuestion: string = '';
  securityAnswer: string = '';
  validEmail: boolean = false;
  validSecQues: boolean = false;
  resetpasswordForm: FormGroup;
  loading: any;
  formErrors = {
    "password": '',
    "confirmPassword": ''
  };
  validationMessages = {
    "password": {
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

    this.resetpasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[\!\@\#\$\%\^\&\*\?\"\'\;\:]).*$')]],
      confirmPassword: ['', Validators.required]
    },
      { validator: this.pwdMatchValidator('password', 'confirmPassword') });
    this.resetpasswordForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordResetPage');
  }

  onValueChanged(data?: any) {
    if (!this.resetpasswordForm) { return; }
    const form = this.resetpasswordForm;

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

  verifyEmail() {
    this.showLoader('Authenticating...');
    console.log(this.emailAddress);
    this.auth.verifyEmail_getSecQues(this.emailAddress)
      .subscribe(
        res => {
          if (res == -1) {
            this.loading.dismiss();
            this.presentToast("Email address doesn't exist!");
          } else {
            this.loading.dismiss();
            this.securityQuestion = res.securityQuestion;
            this.userId = res.id;
            this.validEmail = true;
          }
        },
        err => {
          this.loading.dismiss();
          this.presentToast('Error: ' + err);
        }
      );
  }

  verifySecQues() {
    this.showLoader('Authenticating...');
    console.log(this.securityAnswer);
    this.auth.verifySecAns(this.userId, this.securityAnswer)
      .subscribe(
        res => {
          if (res == -1) {
            this.loading.dismiss();
            this.presentToast("Wrong answer. Please try again.")
          } else {
            this.loading.dismiss();
            this.validEmail = false;
            this.validSecQues = true;
          }
        },
        err => {
          this.loading.dismiss();
          this.presentToast('Error: ' + err);
        }
      );
  }

  onSubmit() {
    this.showLoader('Authenticating...');
    let payLoad = this.resetpasswordForm.value;
    delete payLoad.confirmPassword;
    console.log(payLoad);
    this.auth.resetPassword(this.userId, payLoad)
      .subscribe(
        res => {
          this.loading.dismiss();
          this.presentToast('Successful!');
          this.viewCtrl.dismiss();
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
