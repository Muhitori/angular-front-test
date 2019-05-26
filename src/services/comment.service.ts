import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Comment } from '../models/comment';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = `${environment.host_name}/comments`;

  constructor(
    private http: HttpClient
  ) {
  }

  getPostsComments(id: number): Observable<Comment[]> {
    const params = {
      postId: id.toString()
    };
    return this.http.get<Comment[]>(this.baseUrl, {params});
  }
}
