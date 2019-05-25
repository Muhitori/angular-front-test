import { Component, OnInit } from '@angular/core';

import { PostService } from '../../../../services/post.service';
import { Post } from '../../../../models/post';
import { PagerService } from './pager.service';
import { ModalService } from '../../../shared/modals/modal.service';
import { UserDetailsComponent } from '../../../shared/modals/user-details/user-details.component';
import { CommentDetailsComponent } from '../../../shared/modals/comment-details/comment-details.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts: Post[];
  public pager: any = {};
  public pagedItems: Post[];
  public userDetailsModalId = UserDetailsComponent.ID;
  public commentDetailsModalId = CommentDetailsComponent.ID;

  constructor(
    private postService: PostService,
    private pagerService: PagerService,
    private modalService: ModalService
  ) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(
      posts => {
        this.posts = posts;
        this.setPage(1);
      }
    );
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.posts.length, page);
    this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  openModal(id: string, args: any): void {
    this.modalService.open(id, args);
  }

}
