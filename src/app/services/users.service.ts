import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../shared/user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL = environment.API_URL + '/api/users/';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    if (environment.production) {
    console.log(environment.production);
    }
    return this.http.get<User>(this.API_URL);
  }
}
