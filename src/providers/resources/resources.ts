import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseurl } from './../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import { EncryptionProvider } from '../encryption/encryption';
/*
  Generated class for the ResourcesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResourcesProvider {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider,
    private ep: EncryptionProvider) {
    console.log('Hello ResourcesProvider Provider');
  }

  getResources(id: number): Observable<any> {
    return this.http.get(baseurl + 'resource/' + id)
      .map(records => {
        this.ep.traversal(records, 1);
        return records;
      })
      .catch(error => { return this.processHttpmsgService.handleError(error); })
  }

  addResource(id: number, resource: Object): Observable<any> {
    this.ep.traversal(resource, 0);
    return this.http.post(baseurl + 'resource/' + id, resource)
      .catch(error => { return this.processHttpmsgService.handleError(error); })
  }

  deleteResource(id: number, recordid: number): Observable<any> {
    return this.http.delete(baseurl + 'resource/' + recordid + '/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }
}
