import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseurl } from './../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
/*
  Generated class for the ImmunizationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImmunizationProvider {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello ImmunizationProvider Provider');
  }

  getRecords(id: number): Observable<any> {
    return this.http.get(baseurl + 'immunization/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addRecord(id: number, record: Object): Observable<any> {
    return this.http.post(baseurl + 'immunization/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

}
