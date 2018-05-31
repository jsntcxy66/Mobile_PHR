import { Injectable } from '@angular/core';

/*
  Generated class for the SocialHistoryClassificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SocialHistoryClassificationProvider {

  constructor() {
    console.log('Hello SocialHistoryClassificationProvider Provider');
  }

  getMenu(id: number): any[] {
    let arr = [];
    if (id === 0) {
      arr = [
        { id: 1, name: 'Smoking', menu: 'socialhistory', end: true },
        { id: 2, name: 'Alcohol', menu: 'socialhistory', end: true },
        { id: 3, name: 'Pill', menu: 'socialhistory', end: true },
        { id: 4, name: 'Travel', menu: 'socialhistory', end: true },
        { id: 5, name: 'Housing', menu: 'socialhistory', end: true }
      ];
    }
    return arr;
  }

}
