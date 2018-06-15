import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseurl } from './../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';

/*
  Generated class for the TestResultsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestResultsProvider {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello TestResultsProvider Provider');
  }

  getLabTestCategory(): Observable<any> {
    return this.http.get(baseurl + 'labtest')
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getLabtTest(userid: number, testid: number): Observable<any> {
    return this.http.get(baseurl + 'labtest/' + testid + '/' + userid)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  addLabTest(userid: number, testid: number, record: Object): Observable<any> {
    return this.http.post(baseurl + 'labtest/' + testid + '/' + userid, record)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

}
