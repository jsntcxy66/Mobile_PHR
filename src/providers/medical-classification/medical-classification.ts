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
        { id: 1, name: 'Hematology and Coagulation', icon: 'restaurant', end: false },
        { id: 2, name: 'Immunology', icon: 'beer', end: false },
        { id: 3, name: 'Clinical Chemistry', icon: 'walk', end: false },
        { id: 4, name: 'Metabolic and Endocrine Tests', icon: 'speedometer', end: false },
        { id: 5, name: 'Therapeutic-Drug Monitoring and Toxicology', icon: 'leaf', end: false },
      ];
    } else if (id === 1) {
      arr = [
        { id: 11, name: 'Antithrombin III', icon: 'restaurant', end: true },
        { id: 12, name: 'Anti-Xa assay (heparin assay)', icon: 'beer', end: true },
        { id: 13, name: 'Carboxyhemoglobin', icon: 'walk', end: true },
        { id: 14, name: 'Differential blood count', icon: 'speedometer', end: true },
        { id: 15, name: 'Erythrocyte count', icon: 'leaf', end: true },
        { id: 16, name: 'Erythrocyte lifespan', icon: 'leaf', end: true }
      ];
    }
    return arr;
  }

}
