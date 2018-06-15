import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessHttpmsgProvider } from './../process-httpmsg/process-httpmsg';

import { Mytracker } from './../../shared/mytracker';
import { baseurl } from '../../shared/baseurl';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the TrackersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrackersProvider {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello TrackersProvider Provider');
  }

  getRecords(id: number, title: string): Observable<any> {
    return this.http.get(baseurl + 'trackers/' + title + '/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); })
  }

  addRecord(id: number, data: Object) {
    return this.http.post(baseurl + 'trackers/' + id, data)
      .catch(error => { return this.processHttpmsgService.handleError(error); })
  }

}
