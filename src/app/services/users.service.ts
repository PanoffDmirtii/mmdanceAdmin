import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../shared/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL = 'http://localhost:8001/api/users/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<User>(this.API_URL)
  }
}
