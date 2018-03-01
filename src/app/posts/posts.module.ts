import { PostsComponent } from './posts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostAdminComponent } from './post-admin/post-admin.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    PostComponent,
    PostAdminComponent,
    PostsComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  exports: [
    PostsComponent
  ]
})
export class PostsModule { }
