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

  getMain(): any[] {
    let arr = [
      { id: 0, name: 'food', icon: 'restaurant' },
      { id: 1, name: 'alcohol', icon: 'beer' },
      { id: 2, name: 'exercise', icon: 'walk' },
      { id: 3, name: 'weight', icon: 'speedometer' },
      { id: 4, name: 'medication', icon: 'leaf' },
      { id: 5, name: 'vaccination', icon: 'leaf' }
    ];
    return arr;
  }

  getSub(id: number): any[] {
    let arr = [
      { id: 0, name: '123', icon: 'restaurant' },
      { id: 1, name: '123', icon: 'beer' },
      { id: 2, name: '123', icon: 'walk' },
      { id: 3, name: '123', icon: 'speedometer' },
      { id: 4, name: '123', icon: 'leaf' },
      { id: 5, name: '123', icon: 'leaf' }
    ];
    return arr;
  }
}
