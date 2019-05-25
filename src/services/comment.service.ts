import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Comment} from '../models/comment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments?postId';
  constructor(
    private http: HttpClient
  ) { }

  getPostsComments(id: number): Observable<Comment[]> {
    const url = `${this.commentsUrl}=${id}`;
    return this.http.get<Comment[]>(url);
  }
}
