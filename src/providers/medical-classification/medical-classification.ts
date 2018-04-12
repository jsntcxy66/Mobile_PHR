import { Injectable } from '@angular/core';
/*
  Generated class for the MedicalClassificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MedicalClassificationProvider {

  constructor() {
    console.log('Hello MedicalClassificationProvider Provider');
  }

  getMenu(id: number): any[] {
    let arr = [];
    if (id === 0) {
      arr = [
        { id: 1, name: 'Hematology and Coagulation', menu: 'lab_test', end: false },
        { id: 2, name: 'Immunology', menu: 'lab_test', end: false },
        { id: 3, name: 'Clinical Chemistry', menu: 'lab_test', end: false },
        { id: 4, name: 'Metabolic and Endocrine Tests', menu: 'lab_test', end: false },
        { id: 5, name: 'Therapeutic-Drug Monitoring and Toxicology', menu: 'lab_test', end: false },
      ];
    } else if (id === 1) {
      arr = [
        { id: 11, name: 'Antithrombin III', menu: 'lab_test', end: true },
        { id: 12, name: 'Anti-Xa assay (heparin assay)', menu: 'lab_test', end: true },
        { id: 13, name: 'Carboxyhemoglobin', menu: 'lab_test', end: true },
        { id: 14, name: 'Differential blood count', menu: 'lab_test', end: true },
        { id: 15, name: 'Erythrocyte count', menu: 'lab_test', end: true },
        { id: 16, name: 'Erythrocyte lifespan', menu: 'lab_test', end: true }
      ];
    }
    return arr;
  }

}
