import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { baseurl } from './../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';

/*
  Generated class for the AppointmentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppointmentProvider {

  constructor(public http: HttpClient,
    private processHttpmsgService: ProcessHttpmsgProvider) { }

  getAppointment(id: number): Observable<any> {
    return this.http.get(baseurl + 'appointment/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); })
  }

  addAppointment(id: number, appointment: Object): Observable<any> {
    return this.http.post(baseurl + 'appointment/' + id, appointment)
      .catch(error => { return this.processHttpmsgService.handleError(error); })
  }

  deleteAppointment(id: number, recordid: number): Observable<any> {
    return this.http.delete(baseurl + 'appointment/' + recordid + '/' + id)
      .catch(error => { return this.processHttpmsgService.handleError(error); });
  }
}
