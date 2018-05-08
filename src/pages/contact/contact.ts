import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { ContactDetailPage } from './../contact-detail/contact-detail';
import { ContactAddContactsPage } from '../contact-add-contacts/contact-add-contacts';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  contacts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController) {

    this.contacts = [
      {
        category: 'Emergency Contacts',
        name: 'emergency'
      },
      {
        category: 'Friends',
        name: 'friends'
      },
      {
        category: 'Family Members',
        name: 'family'
      },
      {
        category: 'Doctors',
        name: 'doctors'
      }
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  openPage(name: string) {
    this.navCtrl.push(ContactDetailPage,{name: name});
  }

  addContact() {
    let modal = this.modalCtrl.create(ContactAddContactsPage);
    modal.present();
    modal.onDidDismiss(() => {
      this.toastCtrl.create({
        message: 'Successfully added a new contact',
        position: 'bottom',
        duration: 2000
      }).present();
    });
  }
}
