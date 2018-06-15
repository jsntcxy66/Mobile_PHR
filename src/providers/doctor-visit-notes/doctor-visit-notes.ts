import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseurl } from './../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
/*
  Generated class for the DoctorVisitNotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctorVisitNotesProvider {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello DoctorVisitNotesProvider Provider');
  }

  getRecords(id: number): Observable<any> {
    return this.http.get(baseurl + 'doctorvisitnotes/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addRecord(id: number, record: Object): Observable<any> {
    return this.http.post(baseurl + 'doctorvisitnotes/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }
}