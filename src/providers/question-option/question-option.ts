import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QuestionOptionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionOptionProvider {


  constructor(public http: HttpClient) { }

  //get surgical history question Doctor options
  getDoctorOption() {

    let doctors = [
      {
        id: 0,
        firstname: "Scott",
        lastname: "Williamson",
      },
      {
        id: 1,
        firstname: "Aaric",
        lastname: "Falconi"
      }
    ];

    let option: Array<{ key: number, value: string }> = [];

    for (let i = 0; i < doctors.length; i++) {
      option[i] = {
        key: doctors[i].id,
        value: doctors[i].firstname + doctors[i].lastname
      };
    }
    console.log(option);

    return option;
  }

}
