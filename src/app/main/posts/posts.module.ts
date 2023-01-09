import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddEditPostComponent } from './pages/add-edit-post/add-edit-post.component';
import { PostsRoutingModule } from './posts-routing.module';


@NgModule({
  declarations: [
    AddEditPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  exports: [
    AddEditPostComponent
  ],
})
export class PostsModule { }