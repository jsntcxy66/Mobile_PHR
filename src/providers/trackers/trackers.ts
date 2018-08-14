import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessHttpmsgProvider } from './../process-httpmsg/process-httpmsg';

import { baseurl } from '../../shared/baseurl';
import { EncryptionProvider } from '../encryption/encryption';

/*
  Generated class for the TrackersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrackersProvider {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider,
    private ep: EncryptionProvider) {
    console.log('Hello TrackersProvider Provider');
  }

  getRecords(userid: number, id: number): Observable<any> {
    return this.http.get(baseurl + 'trackers/' + id + '/' + userid)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); })
  }

  addRecord(userid: number, id: number, data: Object) {
    this.ep.traversal(data, 0);
    return this.http.post(baseurl + 'trackers/' + id + '/' + userid, data)
      .catch(error => { return this.processHttpmsgService.handleError(error); })
  }

}
