import { IPost } from './../../pages/models/post';
import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {

  @Input() post: IPost | undefined

  get imagePath(): string {
    return `${environment.imagePath}${this.post?.image}`
  }

}
