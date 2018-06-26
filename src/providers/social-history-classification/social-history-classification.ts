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
        { id: 1, name: 'smoking', menu: 'socialhistory', end: true },
        { id: 2, name: 'alcohol', menu: 'socialhistory', end: true },
        { id: 3, name: 'drug', menu: 'socialhistory', end: true },
        { id: 4, name: 'travel', menu: 'socialhistory', end: true },
        { id: 5, name: 'housing', menu: 'socialhistory', end: true }
      ];
    }
    return arr;
  }

}
