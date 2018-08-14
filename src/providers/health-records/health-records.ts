import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseurl } from './../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import { EncryptionProvider } from '../encryption/encryption';

import 'rxjs/add/operator/map';

/*
  Generated class for the HealthRecordsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HealthRecordsProvider {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider,
    private ep: EncryptionProvider) {
    console.log('Hello HealthRecordsProvider Provider');
  }

  getLabTestCategory(): Observable<any> {
    return this.http.get(baseurl + 'records/labtest/category')
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getLabTest(userid: number, testid: number): Observable<any> {
    return this.http.get(baseurl + 'records/labtest/' + testid + '/' + userid)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addLabTest(userid: number, testid: number, record: Object): Observable<any> {
    this.ep.traversal(record, 0);
    return this.http.post(baseurl + 'records/labtest/' + testid + '/' + userid, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  deleteLabTest(id: number, testid: number, subtestid: number, recordid: number): Observable<any> {
    return this.http.delete(baseurl + 'records/labtest/' + testid + '/' + subtestid + '/' + recordid + '/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getRecentLabTest(userid: number, duration: number): Observable<any> {
    return this.http.get(baseurl + 'records/labtest/days/' + duration + '/' + userid)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getDiagnosticProcedure(userid: number, testid: number): Observable<any> {
    return this.http.get(baseurl + 'records/diagnosticprocedure/' + testid + '/' + userid)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addDiagnosticProcedure(userid: number, testid: number, record: Object): Observable<any> {
    this.ep.traversal(record, 0);
    return this.http.post(baseurl + 'records/diagnosticprocedure/' + testid + '/' + userid, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  deleteDiagnosticProcedure(id: number, testid: number, subtestid: number, recordid: number): Observable<any> {
    return this.http.delete(baseurl + 'records/diagnosticprocedure/' + testid + '/' + subtestid + '/' + recordid + '/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getRecentDiagnosticProcedure(userid: number, duration: number): Observable<any> {
    return this.http.get(baseurl + 'records/diagnosticprocedure/days/' + duration + '/' + userid)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getDoctorVisitNotes(id: number): Observable<any> {
    return this.http.get(baseurl + 'records/doctorvisitnotes/' + id)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addDoctorVisitNotes(id: number, record: Object): Observable<any> {
    this.ep.traversal(record, 0);
    return this.http.post(baseurl + 'records/doctorvisitnotes/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  deleteDoctorVisitNotes(id: number, recordid: number): Observable<any> {
    return this.http.delete(baseurl + 'records/doctorvisitnotes/' + recordid + '/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getRecentDoctorVisitNotes(userid: number, duration: number): Observable<any> {
    return this.http.get(baseurl + 'records/doctorvisitnotes/days/' + duration + '/' + userid)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getMedication(id: number): Observable<any> {
    return this.http.get(baseurl + 'records/medication/' + id)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addMedication(id: number, record: Object): Observable<any> {
    this.ep.traversal(record, 0);
    return this.http.post(baseurl + 'records/medication/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  deleteMedication(id: number, recordid: number): Observable<any> {
    return this.http.delete(baseurl + 'records/medication/' + recordid + '/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }
  
  getRecentMedication(userid: number, duration: number): Observable<any> {
    return this.http.get(baseurl + 'records/medication/days/' + duration + '/' + userid)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getImmunization(id: number): Observable<any> {
    return this.http.get(baseurl + 'records/immunization/' + id)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addImmunization(id: number, record: Object): Observable<any> {
    this.ep.traversal(record, 0);
    return this.http.post(baseurl + 'records/immunization/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  deleteImmunization(id: number, recordid: number): Observable<any> {
    return this.http.delete(baseurl + 'records/immunization/' + recordid + '/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getRecentImmunization(userid: number, duration: number): Observable<any> {
    return this.http.get(baseurl + 'records/immunization/days/' + duration + '/' + userid)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

}
