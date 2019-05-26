import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './modals/user-details/user-details.component';
import { CommentDetailsComponent } from './modals/comment-details/comment-details.component';
import { ModalService } from './modals/modal.service';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    UserDetailsComponent,
    CommentDetailsComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ModalService
  ],
  exports: [
    UserDetailsComponent,
    CommentDetailsComponent,
    PaginationComponent
  ]
})
export class SharedModule {
}
