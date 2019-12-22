import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MailerMessageService {
  // API_URL = 'http://127.0.0.1:8001/sender';
  API_URL = 'https://mmdance-bot.herokuapp.com/sender';
  headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });
  constructor(private http: HttpClient) {}

    startSendMessage(data): Observable<any> {
    return this.http.post(this.API_URL, data, {responseType: 'text'})
  }
}
