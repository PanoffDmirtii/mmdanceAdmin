import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API_URL = environment.API_URL + '/api/admins/';

  constructor(private http: HttpClient) {}

  getAdmins(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
}
