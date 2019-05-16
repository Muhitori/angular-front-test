import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PostListComponent} from './components/post/post-list/post-list.component';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {PostCreateComponent} from './components/post/post-create/post-create.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailsComponent} from './components/post/post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path: 'comment/details/:id',
    component: CommentDetailsComponent
  },
  {
    path: 'user/details/:id',
    component: UserDetailsComponent
  },
  {
    path: 'post/details/:id',
    component: PostDetailsComponent
  },
  {
    path: 'post/create',
    component: PostCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
