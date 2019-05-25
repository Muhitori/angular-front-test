import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './modals/user-details/user-details.component';
import { CommentDetailsComponent } from './modals/comment-details/comment-details.component';
import { ModalService } from './modals/modal.service';


@NgModule({
  declarations: [
    UserDetailsComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ModalService
  ],
  exports: [
    UserDetailsComponent,
    CommentDetailsComponent
  ]
})
export class SharedModule {
}
