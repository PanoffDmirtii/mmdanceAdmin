import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailerMessageService {
  API_URL = environment.API_URL + '/sender';
  constructor(private http: HttpClient) {}

    startSendMessage(data): Observable<any> {
    return this.http.post(this.API_URL, data, {responseType: 'text'})
  }
}
