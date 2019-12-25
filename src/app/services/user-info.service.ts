import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  API_URL = environment.API_URL + '/api/users/';
  constructor(private http: HttpClient) {}

  getInfo(userId: string): Observable<any> {
    return this.http.get(this.API_URL + `${userId}/`);
  }

}
