import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactsProvider } from '../contacts/contacts';

/*
  Generated class for the QuestionOptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionOptionProvider {


  constructor(public http: HttpClient,
    private contactsProvider: ContactsProvider) { }

  //get surgical history question Doctor options
  async getDoctorOption(id: number): Promise<Array<{ key: string, value: string }>> {

    let doctors = [];

    let option: Array<{ key: string, value: string }> = [];

    doctors = <any>await this.contactsProvider.getDoctors(id).toPromise();

    for (let i = 0; i < doctors.length; i++) {
      option[i] = {
        key: doctors[i].firstname + ' ' + doctors[i].lastname,
        value: doctors[i].firstname + ' ' + doctors[i].lastname
      };
    }

    console.log(option);
    return option;

  }

}
