import { Component, ElementRef, OnInit } from '@angular/core';
import { Comment } from '../../../../models/comment';
import { CommentService } from '../../../../services/comment.service';
import { AbstractModal } from '../abstract-modal.component';
import { Post } from '../../../../models/post';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: [
    '../abstract-modal.component.scss',
    './comment-details.component.css'
  ]
})
export class CommentDetailsComponent extends AbstractModal implements OnInit {
  public static readonly ID = 'comment-details';
  protected id = CommentDetailsComponent.ID;
  public comments: Comment[];
  public post: Post;

  constructor(
    protected modalService: ModalService,
    protected el: ElementRef,
    private commentService: CommentService
  ) {
    super(modalService, el);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  open(post: Post): void {
    super.open();
    this.post = post;
    this.getPostComments(this.post.id);
  }

  getPostComments(postId: number): void {
    this.commentService.getPostsComments(postId).subscribe(
      comments => this.comments = comments
    );
  }
}
