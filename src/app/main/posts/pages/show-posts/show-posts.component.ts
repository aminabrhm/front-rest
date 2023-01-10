import { PostsService } from './../../posts.service';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})
export class ShowPostsComponent {
  constructor(private service: PostsService){}

  async ngOnInit(){
    const posts = await lastValueFrom(this.service.getPosts())
  }
}
