import { Injectable } from '@angular/core';

/*
  Generated class for the AllergyClassificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AllergyClassificationProvider {

  constructor() {
    console.log('Hello AllergyClassificationProvider Provider');
  }

  getMenu(id: number): any[] {
    let arr = [];
    if (id === 0) {
      arr = [
        { id: 1, name: 'Food Allergy', menu: 'allergy', end: true },
        { id: 2, name: 'Skin Allergy', menu: 'allergy', end: true },
        { id: 3, name: 'Dust Allergy', menu: 'allergy', end: true },
        { id: 4, name: 'Insect Sting Allergy', menu: 'allergy', end: true },
        { id: 5, name: 'Pet Allergies', menu: 'allergy', end: true },
        { id: 6, name: 'Eye Allergy', menu: 'allergy', end: true },
        { id: 7, name: 'Drug Allergies', menu: 'allergy', end: true },
        { id: 8, name: 'Allergic Rhinitis', menu: 'allergy', end: true },
        { id: 9, name: 'Latex Allergy', menu: 'allergy', end: true },
        { id: 10, name: 'Mold Allergy', menu: 'allergy', end: true },
        { id: 11, name: 'Sinus Infection', menu: 'allergy', end: true },
        { id: 12, name: 'Cockroach Allergy', menu: 'allergy', end: true }
      ];
    }
    return arr;
  }
}
