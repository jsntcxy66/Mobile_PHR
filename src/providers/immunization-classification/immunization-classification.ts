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
    // get categories from database
    let arr = [];
    if (id === 0) {
      arr = [
        { id: 1, name: 'Influenza', menu: 'immunization', end: true },
        { id: 2, name: 'Tdap or Td', menu: 'immunization', end: true },
        { id: 3, name: 'MMR', menu: 'immunization', end: true },
        { id: 4, name: 'VAR', menu: 'immunization', end: true },
        { id: 5, name: 'RZV or ZVL', menu: 'immunization', end: true },
        { id: 6, name: 'HPV-Female', menu: 'immunization', end: true },
        { id: 7, name: 'HPV-Male', menu: 'immunization', end: true },
        { id: 8, name: 'PCV13', menu: 'immunization', end: true },
        { id: 9, name: 'PPSV23', menu: 'immunization', end: true },
        { id: 10, name: 'HepA', menu: 'immunization', end: true },
        { id: 11, name: 'HepB', menu: 'immunization', end: true },
        { id: 12, name: 'MenACWY', menu: 'immunization', end: true },
        { id: 13, name: 'MenB', menu: 'immunization', end: true },
        { id: 14, name: 'Hib', menu: 'immunization', end: true },
        { id: 15, name: 'DTaP', menu: 'immunization', end: true },
        { id: 16, name: 'Rotavirus (RV)', menu: 'immunization', end: true },
        { id: 17, name: 'IPV', menu: 'immunization', end: true },
        { id: 18, name: 'Other Vaccine', menu: 'immunization', end: true }
      ];
    }
    return arr;
  }
}
