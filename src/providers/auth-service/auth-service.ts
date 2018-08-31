import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseurl } from './../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import { EncryptionProvider } from '../encryption/encryption';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  userId: number;

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider,
    private ep: EncryptionProvider) {
    console.log('Hello AuthServiceProvider Provider');
  }

  login(credentials: Object): Observable<any> {
    return this.http.post(baseurl + 'users/login', credentials)
      .map((res: number) => this.userId = res)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  register(data: Object): Observable<any> {
    this.ep.traversal(data, 0);
    return this.http.post(baseurl + 'users/signup', data)
      .map((res: { id: number, exist: boolean }) => {
        if (res.exist == false)
          this.userId = res.id;
        else this.userId = undefined;
        return res;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  logout() {
    this.userId = undefined;
  }

  editPassword(id: number, password: Object): Observable<any> {
    return this.http.post(baseurl + 'users/editpassword/' + id, password)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  resetPassword(id: number, password: Object): Observable<any> {
    return this.http.post(baseurl + 'users/resetpassword/' + id, password)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  verifyEmail_getSecQues(email: Object) {
    return this.http.post(baseurl + 'users/email/', email)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  verifySecAns(id: number, secAns: Object) {
    return this.http.post(baseurl + 'users/securityanswer/' + id, secAns)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }
}
