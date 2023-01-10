import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/post',
    pathMatch: 'full'
  },
  {
    path: 'post',
    loadChildren: () => import('./main/posts/posts.module').then((m) => m.PostsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./main/auth/auth-routing.module').then((m) => m.AuthRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
