import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Subscription } from "../subscription";
import {environment} from '../../environments/environment';

@Injectable(
  {providedIn: 'root'}
)
export class ServiceSubscription {
  API_URL = environment.API_URL + '/api/subscriptions/';
  constructor(private http: HttpClient) {}

  getAudience(): Observable<any> {
    return this.http.get<Subscription>(this.API_URL)
  }

}
