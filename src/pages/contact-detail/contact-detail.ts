import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Storage } from '@ionic/storage';
import { ContactsProvider } from '../../providers/contacts/contacts';

/**
 * Generated class for the ContactDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html',
})
export class ContactDetailPage {

  userId: number;
  category: string;
  contacts: any[];
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private call: CallNumber,
    private storage: Storage,
    private contactsProvider: ContactsProvider) {

    this.category = this.navParams.get('name');
    console.log(this.category);

    // get userId from local storage
    // this.storage.get('id').then(id => {
    //   if (id) {
    //     this.userId = id;
    //   } else {
    //     console.log('UserId not defined');
    //   }
    // });
    this.userId = 1;
    
    // get all contacts' data
    this.contactsProvider.getContactsDetail(this.userId)
      .subscribe(contacts => this.contacts = contacts, errmess => this.errMess = <any>errmess);
    // this.contacts = [
    //   {
    //     firstname: "Aaric",
    //     lastname: "Falconi",
    //     tel: "4123457680",
    //     fax: "4123457680",
    //     relation: "",
    //     specialization: "physician",
    //     location: [
    //       "5542 Walnut St",
    //       "5819 Elwood St",
    //       "1001 Fifth Ave"
    //     ],
    //     group: "friends,doctors"
    //   },
    //   {
    //     firstname: "Alivia",
    //     lastname: "Ryan",
    //     tel: "4123457680",
    //     fax: "",
    //     relation: "husband",
    //     specialization: "",
    //     location: ["999 N Negley Str"],
    //     group: "family,emergency"
    //   },
    //   {
    //     firstname: "Martin",
    //     lastname: "DOUGLAS",
    //     tel: "4123457680",
    //     fax: "",
    //     relation: "father",
    //     specialization: "",
    //     location: ["132 Centre Ave"],
    //     group: "family"
    //   },
    //   {
    //     firstname: "Scott",
    //     lastname: "Williamson",
    //     tel: "4123457680",
    //     fax: "4123457680",
    //     relation: "",
    //     specialization: "dermatologist",
    //     location: [
    //       "1100 Fifth Ave",
    //       "1090 Centre Ave"
    //     ],
    //     group: "doctors"
    //   },
    // ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailPage');
  }

  isCategory(i): boolean {
    let groups = this.contacts[i].group.split(",");
    for (let j = 0; j < groups.length; j++) {
      if (this.category == groups[j]) return true;
    }
    return false;
  }

  checkFamilyorEmergency(i): boolean {
    let groups = this.contacts[i].group.split(",");
    for (let j = 0; j < groups.length; j++) {
      if (groups[j] == "family" || groups[j] == "emergency") return true;
    }
    return false;
  }

  checkDoctor(i): boolean {
    let groups = this.contacts[i].group.split(",");
    for (let j = 0; j < groups.length; j++) {
      if (groups[j] == "doctors") return true;
    }
    return false;
  }

  callNumber(i) {
    this.call.callNumber(this.contacts[i].tel, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
