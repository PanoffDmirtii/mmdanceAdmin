import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Subscription } from "../subscription";

@Injectable(
  {providedIn: 'root'}
)
export class ServiceSubscription {
  // API_URL = 'http://localhost:8001/api/subscriptions/';
  API_URL = 'https://mmdance-bot.herokuapp.com/api/subscriptions/';

  constructor(private http: HttpClient) {}

  getAudience(): Observable<any> {
    return this.http.get<Subscription>(this.API_URL)
  }

}
