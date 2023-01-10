import { PostsService } from './../../posts.service';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IPost } from '../models/post';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})
export class ShowPostsComponent {
  posts: IPost[] = []
  //#region paging 
  totalRows: number = 0
  pageSize: number = 4
  page: number = 1
  //#endregion
  constructor(private service: PostsService) { }

  async ngOnInit() {
    const postsObj = await lastValueFrom(this.service.getPosts({pageSize:this.pageSize, page: this.page}))
    this.posts = postsObj['posts']
    this.totalRows = postsObj['rowCount']
  }

  async pageChange(event: any) {
    this.page = event
    const postsObj = await lastValueFrom(this.service.getPosts({pageSize:this.pageSize, page: event}))
    this.posts = postsObj['posts']
    this.totalRows = postsObj['rowCount']
  }
}
