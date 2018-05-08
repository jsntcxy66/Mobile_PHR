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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController) {

    this.addContactForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      birthday: [''],
      gender: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactAddContactsPage');
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
