import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the ContactAddContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-add-contacts',
  templateUrl: 'contact-add-contacts.html',
})
export class ContactAddContactsPage {

  addContactForm: FormGroup;
  groups: Array<string> = [];
  isDoctor: boolean = false;
  address: Array<number> = [];

  formErrors = {
    "firstname": '',
    "lastname": '',
    "tel": '',
    "fax": '',
    "group": ''
  };
  validationMessages = {
    "firstname": {
      "required": "Firstname is required.",
      "minlength": "Firstname must be at least 2 characters long.",
      "maxlength": "Firstname cannot be more than 25 characters long."
    },
    "lastname": {
      "required": "Lastname is required.",
      "minlength": "Lastname must be at least 2 characters long.",
      "maxlength": "Lastname cannot be more than 25 characters long."
    },
    "tel": {
      "required": "Tel number is required.",
      "pattern": "Please enter a valid phone number."
    },
    "fax": {
      "pattern": "Please enter a valid fax number."
    },
    "group": {
      "required": "Contact group is required."
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController) {

    this.addContactForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      tel: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      fax: ['', Validators.pattern('[0-9]{10}')],
      location1: [''],
      location2: [''],
      location3: [''],
      group: ['', Validators.required]
    });
    this.addContactForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

    this.addContactForm.controls["group"].valueChanges.subscribe(value => this.onGroupValueChanged(value));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactAddContactsPage');
  }

  onValueChanged(data?: any) {
    if (!this.addContactForm) { return; }
    const form = this.addContactForm;

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

  onGroupValueChanged(value) {
    this.isDoctor = false;
    this.groups = value;
    this.groups.forEach(group => {
      if(group == "doctor") this.isDoctor = true;
    });
    console.log(this.isDoctor);
  }

  addAddress() {
    if (this.address.length < 2)
      this.address.push(1);
  }

  deleteAddress() {
    if (this.address.length > 0)
      this.address.pop();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    console.log(this.addContactForm.value);
    this.toastCtrl.create({
      message: 'Successfully added a new contact',
      position: 'bottom',
      duration: 2000
    }).present();
    this.viewCtrl.dismiss();
  }

}
