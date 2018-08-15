import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseurl } from './../../shared/baseurl';
import { AutoCompleteService } from 'ionic2-auto-complete';

import 'rxjs/add/operator/map'

/*
  Generated class for the SearchFilterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchFilterProvider implements AutoCompleteService {

  labelAttribute = "name";

  constructor(public http: HttpClient) {
    console.log('Hello SearchFilterProvider Provider');
  }

  getResults(keyword: string): Observable<Array<any>> {

    return this.http.get(baseurl + 'records/labtest/category')
      .map((results: Array<any>) => {
        return results.filter(item =>
          item.name.toLowerCase().startsWith(keyword.toLowerCase())
        );
      });
  }

}
