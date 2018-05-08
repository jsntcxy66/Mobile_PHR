import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  registerForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder) {

    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      firstname: ['', [Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.minLength(2), Validators.maxLength(25)]],
      telnum: ['', [Validators.pattern]],
      email: ['', [Validators.email]],
      address: [''],
      birthday: [''],
      gender: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.navCtrl.setRoot(DashboardPage);
  }

}
