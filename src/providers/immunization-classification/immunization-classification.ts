import { Injectable } from '@angular/core';

/*
  Generated class for the ImmunizationClassificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImmunizationClassificationProvider {

  constructor() {
    console.log('Hello ImmunizationClassificationProvider Provider');
  }

  getMenu(id: number): any[] {
    let arr = [];
    if (id === 0) {
      arr = [
        { id: 11, name: 'Food Allergy', icon: 'restaurant', end: true },
        { id: 12, name: 'Skin Allergy', icon: 'beer', end: true },
        { id: 13, name: 'Dust Allergy', icon: 'walk', end: true },
        { id: 14, name: 'Insect Sting Allergy', icon: 'speedometer', end: true },
        { id: 15, name: 'Pet Allergies', icon: 'leaf', end: true },
        { id: 16, name: 'Eye Allergy', icon: 'leaf', end: true },
        { id: 17, name: 'Drug Allergies', icon: 'leaf', end: true },
        { id: 18, name: 'Allergic Rhinitis', icon: 'leaf', end: true },
        { id: 19, name: 'Latex Allergy', icon: 'leaf', end: true },
        { id: 20, name: 'Mold Allergy', icon: 'leaf', end: true },
        { id: 20, name: 'Sinus Infection', icon: 'leaf', end: true },
        { id: 20, name: 'Cockroach Allergy', icon: 'leaf', end: true }
      ];
    }
    return arr;
  }
}
