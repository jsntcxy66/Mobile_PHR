import { baseurl } from './../../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello HistoryProvider Provider');
  }

  getAllergy(id: number): Observable<any> {
    return this.http.get(baseurl + 'history/allergy/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addAllergy(id: number, record: Object): Observable<any> {
    return this.http.post(baseurl + 'history/allergy/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getMedicalHistory(id: number): Observable<any> {
    return this.http.get(baseurl + 'history/medical/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addMedicalHistory(id: number, record: Object): Observable<any> {
    return this.http.post(baseurl + 'history/allergy/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getSocialHistory(id: number): Observable<any> {
    return this.http.get(baseurl + 'history/social/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addSocialHistory(id: number, title: string, record: Object): Observable<any> {
    return this.http.post(baseurl + 'history/social/' + title + '/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getSurgicalHistory(id: number): Observable<any> {
    return this.http.get(baseurl + 'history/surgical/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addSurgicalHistory(id: number, record: Object): Observable<any> {
    return this.http.post(baseurl + 'history/surgical/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getFamilyHistory(id: number): Observable<any> {
    return this.http.get(baseurl + 'history/family/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addFamilyHistory(id: number, record: Object): Observable<any> {
    return this.http.post(baseurl + 'history/family/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }
}
