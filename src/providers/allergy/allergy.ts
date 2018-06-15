import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseurl } from './../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
/*
  Generated class for the AllergyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AllergyProvider {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello AllergyProvider Provider');
  }

  getAllergy(id: number): Observable<any> {
    return this.http.get(baseurl + 'allergy/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addAllergy(id: number, allergy: Object): Observable<any> {
    return this.http.post(baseurl + 'allergy/' + id, allergy)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

}
