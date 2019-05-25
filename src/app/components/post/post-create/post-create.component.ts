import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../../../../models/post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  public post: Post = new Post();

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit() {
  }

  addPost(): void {
    if (!this.post.title) {
      alert('Title is empty');
      return;
    }
    const title = this.post.title;
    const body = this.post.body;
    const userId = 1;
    this.postService.addPost({title, body, userId} as Post)
      .subscribe(() => {
          alert('post created');
          this.goBack();
        }
      );
  }

  goBack(): void {
    this.location.back();
  }

}
