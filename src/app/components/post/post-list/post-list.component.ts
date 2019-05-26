import { Component, OnInit } from '@angular/core';

import { PostService } from '../../../../services/post.service';
import { Post } from '../../../../models/post';
import { ModalService } from '../../../shared/modals/modal.service';
import { UserDetailsComponent } from '../../../shared/modals/user-details/user-details.component';
import { CommentDetailsComponent } from '../../../shared/modals/comment-details/comment-details.component';
import { Pagination } from '../../../../models/pagination';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public pagination: Pagination = new Pagination();
  public posts: Post[];
  public userDetailsModalId = UserDetailsComponent.ID;
  public commentDetailsModalId = CommentDetailsComponent.ID;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private modalService: ModalService
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pagination.fillParameters(params);
      this.getPosts();
    });
  }

  getPosts(): void {
    this.postService.getPosts(this.pagination).subscribe(
      posts => {
        this.posts = posts;
      }
    );
  }

  openModal(id: string, args: any): void {
    this.modalService.open(id, args);
  }

}
