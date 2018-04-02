import { Mytracker } from './../../shared/mytracker';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ProcessHttpmsgProvider } from './../process-httpmsg/process-httpmsg';

import { Observable } from 'rxjs/Observable';

import { Food } from './../../shared/food';
import { Alcohol } from './../../shared/alcohol';

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

  constructor(public http: Http,
    private processHttpmsgService: ProcessHttpmsgProvider) {
    console.log('Hello TrackersProvider Provider');
  }

  getFoods(): Observable<Food[]> {
    return this.http.get(baseurl + 'foods')
      .map(res => { return this.processHttpmsgService.extractData(res); })
      .catch(error => { return this.processHttpmsgService.handleError(error); })
  }
  addFood(food) {
    return this.http.post(baseurl + 'foods', food)
      .subscribe(res => { console.log(res.json()); });
  }

  getAlcohols(): Observable<Alcohol[]> {
    return this.http.get(baseurl + 'alcohols')
      .map(res => { return this.processHttpmsgService.extractData(res); })
      .catch(error => { return this.processHttpmsgService.handleError(error); })
  }
  addAlcohol(alcohol) {
    return this.http.post(baseurl + 'alcohols', alcohol)
      .subscribe(res => { console.log(res.json()); });
  }

  getMytrackers(): Observable<Mytracker[]> {
    return this.http.get(baseurl + 'mytrackers')
      .map(res => { return this.processHttpmsgService.extractData(res); })
      .catch(error => { return this.processHttpmsgService.handleError(error); })
  }
  addMytracker(mytracker) {
    return this.http.post(baseurl + 'mytrackers', mytracker)
      .subscribe(res => { console.log(res.json()); });
  }
}
