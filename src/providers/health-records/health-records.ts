import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseurl } from './../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';

/*
  Generated class for the HealthRecordsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HealthRecordsProvider {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello HealthRecordsProvider Provider');
  }

  getLabTestCategory(): Observable<any> {
    return this.http.get(baseurl + 'records/labtest/category')
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getLabtTest(userid: number, testid: number): Observable<any> {
    return this.http.get(baseurl + 'records/labtest/' + testid + '/' + userid)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addLabTest(userid: number, testid: number, record: Object): Observable<any> {
    return this.http.post(baseurl + 'records/labtest/' + testid + '/' + userid, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getRecentLabTest(userid: number): Observable<any> {
    return this.http.get(baseurl + 'records/labtest/30days' + userid)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getDiagnosticProcedure(userid: number, testid: number): Observable<any> {
    return this.http.get(baseurl + 'records/diagnosticprocedure/' + testid + '/' + userid)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addDiagnosticProcedure(userid: number, testid: number, record: Object): Observable<any> {
    return this.http.post(baseurl + 'records/diagnosticprocedure/' + testid + '/' + userid, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getDoctorVisitNotes(id: number): Observable<any> {
    return this.http.get(baseurl + 'records/doctorvisitnotes/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addDoctorVisitNotes(id: number, record: Object): Observable<any> {
    return this.http.post(baseurl + 'records/doctorvisitnotes/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getMedication(id: number): Observable<any> {
    return this.http.get(baseurl + 'records/medication/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addMedication(id: number, record: Object): Observable<any> {
    return this.http.post(baseurl + 'records/medication/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getImmunization(id: number): Observable<any> {
    return this.http.get(baseurl + 'records/immunization/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addImmunization(id: number, record: Object): Observable<any> {
    return this.http.post(baseurl + 'records/immunization/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

}
