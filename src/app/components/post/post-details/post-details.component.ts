import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../models/post';
import { PostService } from '../../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommentService } from '../../../../services/comment.service';
import { Comment } from '../../../../models/comment';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  public post: Post;
  public comments: Comment[];

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  getPost(): void {
    const id = +this.route.snapshot.params.id;
    this.postService.getPost(id).subscribe(
      response => {
        this.post = response[0];
      }
    );
  }

  getPostComments(): void {
    const id = +this.route.snapshot.params.id;
    this.commentService.getPostsComments(id).subscribe(
      comments => this.comments = comments
    );
  }

  backToPosts(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getPost();
    this.getPostComments();
  }

}
