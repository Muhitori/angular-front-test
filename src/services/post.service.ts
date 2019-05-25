import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { API_URL } from '../app/constants';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json; charset=UTF-8'})
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = `${API_URL}/posts`;

  constructor(
    private http: HttpClient
  ) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  getPost(id: number): Observable<Post> {
    const params = {
      id: id.toString()
    };
    return this.http.get<Post>(this.baseUrl, {params});
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post, httpOptions);
  }
}
