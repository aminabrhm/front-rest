import { ShowPostsComponent } from './pages/show-posts/show-posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPostComponent } from './pages/add-edit-post/add-edit-post.component';

const routes: Routes = [
  {
    path: '',
    component: ShowPostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }