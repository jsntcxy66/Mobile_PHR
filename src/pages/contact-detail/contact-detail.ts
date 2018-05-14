import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.category = this.navParams.get('name');
    console.log(this.category);
    this.contacts = [
      {
        firstname: "Aaric",
        lastname: "Falconi",
        tel: "4123457680",
        fax: "4123457680",
        location: "515 S Aiken Ave",
        type: "friends,doctors"
      },
      {
        firstname: "Alivia",
        lastname: "Ryan",
        tel: "4123457680",
        fax: "4123457680",
        location: "999 N Negley Str",
        type: "family,emergency"
      },
      {
        firstname: "Martin",
        lastname: "DOUGLAS",
        tel: "4123457680",
        fax: "4123457680",
        location: "132 Centre Ave",
        type: "family"
      },
      {
        firstname: "Scott",
        lastname: "Williamson",
        tel: "4123457680",
        fax: "4123457680",
        location: "111 Fifth Ave",
        type: "doctors"
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailPage');
  }

  isCategory(i): boolean {
    let type = this.contacts[i].type.split(",");
    for (let j = 0; j < type.length; j++) {
      if (this.category == type[j]) return true;
    }
    return false;
  }

}
