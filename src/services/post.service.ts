import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { Pagination } from '../models/pagination';
import { environment } from '@env/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json; charset=UTF-8'})
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = `${environment.host_name}/posts`;

  constructor(
    private http: HttpClient,
  ) {
  }

  getPosts(pagination: Pagination): Observable<Post[]> {
    const params = {
      _start: ((pagination.currentPage - 1) * pagination.pageSize).toString(),
      _limit: pagination.pageSize.toString()
    };
    return this.http.get<Post[]>(this.baseUrl, {params});
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post, httpOptions);
  }
}
