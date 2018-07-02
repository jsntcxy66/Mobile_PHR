import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WelcomePage } from '../welcome/welcome';

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

  errMess: string;
  category: string;
  contacts: any[] = [];
  tel: string[] = [];
  fax: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private contactsProvider: ContactsProvider) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    this.category = this.navParams.get('name');
    console.log(this.category);

    // this.contacts = [
    //   {
    //     firstname: "Aaric",
    //     lastname: "Falconi",
    //     tel: "4123457680",
    //     fax: "4123457680",
    //     relationship: "",
    //     specialty: "physician",
    //     location1: "5542 Walnut St",
    //     location2: "5819 Elwood St",
    //     location3: "1001 Fifth Ave",
    //     group: "friend,doctor"
    //   },
    //   {
    //     firstname: "Alivia",
    //     lastname: "Ryan",
    //     tel: "4123457680",
    //     fax: "",
    //     relationship: "husband",
    //     specialty: "",
    //     location1: "999 N Negley Str",
    //     location2: "",
    //     location3: "",
    //     group: "family,emergency"
    //   },
    //   {
    //     firstname: "Martin",
    //     lastname: "DOUGLAS",
    //     tel: "4123457680",
    //     fax: "",
    //     relationship: "father",
    //     specialty: "",
    //     location1: "132 Centre Ave",
    //     location2: "",
    //     location3: "",
    //     group: "family"
    //   },
    //   {
    //     firstname: "Scott",
    //     lastname: "Williamson",
    //     tel: "4123457680",
    //     fax: "4123457680",
    //     relationship: "",
    //     specialty: "dermatologist",
    //     location1: "1100 Fifth Ave",
    //     location2: "1090 Centre Ave",
    //     location3: "",
    //     group: "doctor"
    //   },
    // ];

    // get all contacts' data
    this.contactsProvider.getContactsDetail(this.auth.userId)
      .subscribe(contacts => {
        this.contacts = contacts;
        this.getTelArray();
        this.getFaxArray();
      },
        errmess => this.errMess = <any>errmess
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailPage');
  }

  getTelArray() {
    let arr;
    for (let i = 0; i < this.contacts.length; i++) {
      arr = ("" + this.contacts[i].tel).split("");
      this.tel.push("(" + arr[0] + arr[1] + arr[2] + ") " + arr[3] + arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9]);
    }
  }

  getFaxArray() {
    let arr = [];
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].fax != "") {
        arr = ("" + this.contacts[i].fax).split("");
        this.fax.push("(" + arr[0] + arr[1] + arr[2] + ") " + arr[3] + arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9]);
      } else {
        this.fax.push("");
      }
    }
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
      if (groups[j] == "doctor") return true;
    }
    return false;
  }

  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Oops!',
      message: msg,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.push(WelcomePage);
          }
        }
      ]
    });
    alert.present();
  }

}
