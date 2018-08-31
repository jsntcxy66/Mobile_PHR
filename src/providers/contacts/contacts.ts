import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseurl } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import { EncryptionProvider } from './../encryption/encryption';
/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvider {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider,
    private ep: EncryptionProvider) {
    console.log('Hello ContactsProvider Provider');
  }

  getContactsDetail(id: number): Observable<any> {
    return this.http.get(baseurl + 'contacts/' + id)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); })
  }

  addContacts(id: number, contact: Object): Observable<any> {
    this.ep.traversal(contact, 0);
    return this.http.post(baseurl + 'contacts/' + id, contact)
      .catch(error => { return this.processHttpmsgService.handleError(error); })
  }

  getDoctors(id: number): Observable<any> {
    return this.http.get(baseurl + 'contacts/doctors/' + id)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); })
  }
}
