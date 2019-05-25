import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {User} from '../models/user';
import { Observable, of } from 'rxjs';
import {Post} from '../models/post';
import { API_URL } from '../app/constants';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = `${API_URL}/users`;

  constructor(
    private http: HttpClient
  ) { }

  getUser(id: number): Observable<User> {
    const params = {
      id: id.toString()
    };
    return this.http.get<User>(this.baseUrl, {params});
  }
}
