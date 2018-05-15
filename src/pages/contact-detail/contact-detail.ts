import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

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

  category: string;
  contacts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private call: CallNumber) {

    this.category = this.navParams.get('name');
    console.log(this.category);
    //get all contacts' data
    this.contacts = [
      {
        firstname: "Aaric",
        lastname: "Falconi",
        tel: "4123457680",
        fax: "4123457680",
        location: [
          "5542 Walnut St",
          "5819 Elwood St",
          "1001 Fifth Ave"
        ],
        group: "friends,doctors"
      },
      {
        firstname: "Alivia",
        lastname: "Ryan",
        tel: "4123457680",
        fax: "4123457680",
        location: [
          "999 N Negley Str"
        ],
        group: "family,emergency"
      },
      {
        firstname: "Martin",
        lastname: "DOUGLAS",
        tel: "4123457680",
        fax: "4123457680",
        location: [
          "132 Centre Ave"
        ],
        group: "family"
      },
      {
        firstname: "Scott",
        lastname: "Williamson",
        tel: "4123457680",
        fax: "4123457680",
        location: [
          "1100 Fifth Ave",
          "1090 Centre Ave"
        ],
        group: "doctors"
      },
    ];
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

  callNumber(i) {
    this.call.callNumber(this.contacts[i].tel, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
