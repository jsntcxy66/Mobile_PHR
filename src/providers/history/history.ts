import { baseurl } from './../../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import { EncryptionProvider } from '../encryption/encryption';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider,
    private ep: EncryptionProvider) {
    console.log('Hello HistoryProvider Provider');
  }

  getAllergy(id: number): Observable<any> {
    return this.http.get(baseurl + 'history/allergy/' + id)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addAllergy(id: number, record: Object): Observable<any> {
    this.ep.traversal(record, 0);
    return this.http.post(baseurl + 'history/allergy/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  deleteAllergy(id: number, recordid: number): Observable<any> {
    return this.http.delete(baseurl + 'history/allergy/' + recordid + '/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getRecentAllergy(userid: number, duration: number): Observable<any> {
    return this.http.get(baseurl + 'history/allergy/days/' + duration + '/' + userid)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getMedicalHistory(id: number): Observable<any> {
    return this.http.get(baseurl + 'history/medical/' + id)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addMedicalHistory(id: number, record: Object): Observable<any> {
    this.ep.traversal(record, 0);
    return this.http.post(baseurl + 'history/medical/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  deleteMedicalHistory(id: number, recordid: number): Observable<any> {
    return this.http.delete(baseurl + 'history/medical/' + recordid + '/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getRecentMedicalHistory(userid: number, duration: number): Observable<any> {
    return this.http.get(baseurl + 'history/medical/days/' + duration + '/' + userid)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getSocialHistory(id: number): Observable<any> {
    return this.http.get(baseurl + 'history/social/' + id)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addSocialHistory(id: number, title: string, record: Object): Observable<any> {
    this.ep.traversal(record, 0);
    return this.http.post(baseurl + 'history/social/' + title + '/' + id, record, { responseType: "text" })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  deleteSocialHistory(id: number, type: string, recordid: number): Observable<any> {
    return this.http.delete(baseurl + 'history/social/' + type + '/' + recordid + '/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getRecentSocialHistory(userid: number, duration: number): Observable<any> {
    return this.http.get(baseurl + 'history/social/days/' + duration + '/' + userid)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getSurgicalHistory(id: number): Observable<any> {
    return this.http.get(baseurl + 'history/surgical/' + id)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addSurgicalHistory(id: number, record: Object): Observable<any> {
    this.ep.traversal(record, 0);
    return this.http.post(baseurl + 'history/surgical/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  deleteSurgicalHistory(id: number, recordid: number): Observable<any> {
    return this.http.delete(baseurl + 'history/surgical/' + recordid + '/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getRecentSurgicalHistory(userid: number, duration: number): Observable<any> {
    return this.http.get(baseurl + 'history/surgical/days/' + duration + '/' + userid)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getFamilyHistory(id: number): Observable<any> {
    return this.http.get(baseurl + 'history/family/' + id)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addFamilyHistory(id: number, record: Object): Observable<any> {
    this.ep.traversal(record, 0);
    return this.http.post(baseurl + 'history/family/' + id, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  deleteFamilyHistory(id: number, recordid: number): Observable<any> {
    return this.http.delete(baseurl + 'history/family/' + recordid + '/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getRecentFamilyHistory(userid: number, duration: number): Observable<any> {
    return this.http.get(baseurl + 'history/family/days/' + duration + '/' + userid)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }
}
