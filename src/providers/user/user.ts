import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseurl } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import { EncryptionProvider } from '../encryption/encryption';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider,
    private ep: EncryptionProvider) { }

  getProfile(id: number): Observable<any> {
    return this.http.get(baseurl + 'users/profile/' + id)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  editProfile(id: number, profile: Object): Observable<any> {
    this.ep.traversal(profile, 0);
    return this.http.post(baseurl + 'users/profile/' + id, profile)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }
}
