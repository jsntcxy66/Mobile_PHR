import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
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
  secQuestions: any;

  formErrors = {
    "username": '',
    "password": '',
    "email": '',
    "secQues": '',
    "secAns": '',
    "firstname": '',
    "lastname": '',
    "tel": '',
    "birthday": ''
  };
  validationMessages = {
    "username": {
      "required": "Username is required.",
      "minlength": "Username must be at least 2 characters long.",
      "maxlength": "Username cannot be more than 25 characters long."
    },
    "password": {
      "required": "Password is required.",
      "pattern": "Password must be 8-17 characters long and contains at least one number, one letter and one unique character such as !@#$%^&*?\"';:"
    },
    "email": {
      "required": "Email is required.",
      "email": "Please enter a valid email address."
    },
    "secQues": {
      "required": "Please choose a security question."
    },
    "secAns": {
      "required": "Please enter the question's answer."
    },
    "firstname": {
      "minlength": "Firstname must be at least 2 characters long.",
      "maxlength": "Firstname cannot be more than 25 characters long."
    },
    "lastname": {
      "minlength": "Lastname must be at least 2 characters long.",
      "maxlength": "Lastname cannot be more than 25 characters long."
    },
    "tel": {
      "pattern": "Please enter a valid phone number."
    },
    "birthday": {
      "pattern": "Please enter your birthday in MM/DD/YYYY format."
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder,
    private menuCtrl: MenuController) {

    this.secQuestions = [
      {
        "quesNum": 0,
        "question": "What is the first and last name of your first boyfriend or girlfriend?"
      },
      {
        "quesNum": 1,
        "question": "What is the name of your favorite pet?"
      },
      {
        "quesNum": 2,
        "question": "In what city were you born?"
      },
      {
        "quesNum": 3,
        "question": "What is the name of your first school?"
      },
      {
        "quesNum": 4,
        "question": "What is your favorite movie?"
      },
      {
        "quesNum": 5,
        "question": "What is your mother's maiden name?"
      },
      {
        "quesNum": 6,
        "question": "What is your favorite color?"
      }
    ];

    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      password: ['', [Validators.required, Validators.pattern('^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[\!\@\#\$\%\^\&\*\?\"\'\;\:]).*$')]],
      email: ['', [Validators.required, Validators.email]],
      secQues: ['', Validators.required],
      secAns: ['', Validators.required],
      firstname: ['', [Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.minLength(2), Validators.maxLength(25)]],
      tel: ['', Validators.pattern('[0-9]{10}')],
      address: [''],
      birthday: ['', Validators.pattern('(^(((0[1-9]|1[012])/(0[1-9]|1[0-9]|2[0-8]))|((0[13578]|1[02])/(29|30|31))|((0[469]|11)/(29|30)))/(19|20)\\d\\d$)|(^02/29/(19(04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)|20(([02468][048])|([13579][26])))$)')],
      gender: [''],
      race: ['']
    });
    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) { return; }
    const form = this.registerForm;

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

  onSubmit() {
    console.log(this.registerForm.value);
    this.navCtrl.setRoot(DashboardPage);
    this.menuCtrl.enable(true);
  }

}
