import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AddEditPostComponent } from './pages/add-edit-post/add-edit-post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { ShowPostsComponent } from './pages/show-posts/show-posts.component';


@NgModule({
  declarations: [
    AddEditPostComponent,
    ShowPostsComponent
  ],
  imports: [
    SharedModule,
    PostsRoutingModule
  ],
  exports: [
    AddEditPostComponent
  ],
})
export class PostsModule { }