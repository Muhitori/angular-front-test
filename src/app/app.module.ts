import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostDetailsComponent } from './components/post/post-details/post-details.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { ModalComponentComponent } from './components/modal-component/modal-component.component';

import {PostService} from '../services/post.service';
import {CommentService} from '../services/comment.service';
import {UserService} from '../services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailsComponent,
    PostCreateComponent,
    UserDetailsComponent,
    CommentDetailsComponent,
    ModalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    CommentService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
