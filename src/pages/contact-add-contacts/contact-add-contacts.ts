import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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
  isFamilyorEmergency: boolean = false;
  address: Array<number> = [];
  loading: any;

  formErrors = {
    "firstname": '',
    "lastname": '',
    "relationship": '',
    "tel": '',
    "fax": '',
    "specialty": '',
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
    "relationship": {
      "required": "Relationship is required."
    },
    "specialty": {
      "required": "Specialty is required."
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
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private contactsProvider: ContactsProvider,
    private auth: AuthServiceProvider) {

    this.addContactForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      relationship: ['', Validators.required],
      tel: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      fax: ['', Validators.pattern('[0-9]{10}')],
      specialty: ['', Validators.required],
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
    this.isFamilyorEmergency = false;
    this.groups = value;
    if (this.groups.includes("doctor")) {
      this.isDoctor = true;
      this.addContactForm.patchValue({
        specialty: ""
      });
    } else {
      this.isDoctor = false;
      this.addContactForm.patchValue({
        specialty: "0"
      });
    }

    if (this.groups.includes("family") || this.groups.includes("emergency")) {
      this.isFamilyorEmergency = true;
      this.addContactForm.patchValue({
        relationship: ""
      });
    } else {
      this.isFamilyorEmergency = false;
      this.addContactForm.patchValue({
        relationship: "0"
      });
    }

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
    this.showLoader('Adding...');
    let contact = this.addContactForm.value;
    contact.group = this.addContactForm.get("group").value.toString();
    console.log(contact);
    // post new contact info
    this.contactsProvider.addContacts(this.auth.userId, contact)
      .subscribe(
        contact => {
          this.loading.dismiss();
          this.presentToast('Successfully added a new contact.');
          this.viewCtrl.dismiss();
        },
        error => {
          this.loading.dismiss();
          this.presentToast('Failed to add a new contact.');
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
      dismissOnPageChange: true
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}
