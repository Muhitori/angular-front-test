import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';

import {PostListComponent} from './post-list/post-list.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {PostCreateComponent} from './post-create/post-create.component';

import {PostService} from '../../../services/post.service';
import {FormsModule} from '@angular/forms';
import {PagerService} from './post-list/pager.service';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent,
    PostCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PostRoutingModule,
    SharedModule
  ],
  providers: [
    PostService,
    PagerService
  ]
})
export class PostModule { }
