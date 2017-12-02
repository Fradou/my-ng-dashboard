import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostAdminComponent } from './post-admin/post-admin.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  declarations: [PostListComponent, PostAdminComponent, PostComponent]
})
export class PostsModule { }
