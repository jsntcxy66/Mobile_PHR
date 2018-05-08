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
  matchCategory: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.category = this.navParams.get('name');
    console.log(this.category);
    this.contacts = [
      {
        firstname: "Aaric",
        lastname: "Falconi",
        telnum: "4123457680",
        email: "AaricF@gmail.com",
        address: "515 S Aiken Ave",
        birthday: "01/01/1990",
        gender: "male",
        type: "friends,doctors"
      },
      {
        firstname: "Alivia",
        lastname: "Ryan",
        telnum: "4123457680",
        email: "AliviaR@gmail.com",
        address: "999 N Negley Str",
        birthday: "01/01/1990",
        gender: "female",
        type: "family,emergency"
      },
      {
        firstname: "Martin",
        lastname: "DOUGLAS",
        telnum: "4123457680",
        email: "MartinD@gmail.com",
        address: "132 Centre Ave",
        birthday: "01/02/1991",
        gender: "male",
        type: "family"
      },
      {
        firstname: "Scott",
        lastname: "Williamson",
        telnum: "4123457680",
        email: "ScottW@gmail.com",
        address: "111 Fifth Ave",
        birthday: "07/01/1980",
        gender: "male",
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
