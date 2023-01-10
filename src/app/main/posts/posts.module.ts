import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';

import { AddEditPostComponent } from './pages/add-edit-post/add-edit-post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { ShowPostsComponent } from './pages/show-posts/show-posts.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { FilterPipe } from 'src/shared/pipes/filter.pipe';


@NgModule({
  declarations: [
    AddEditPostComponent,
    ShowPostsComponent,
    PostCardComponent
  ],
  imports: [
    SharedModule,
    PostsRoutingModule,
    FilterPipe
  ],
  exports: [
    AddEditPostComponent
  ],
})
export class PostsModule { }