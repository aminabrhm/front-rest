import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from 'src/app/main/posts/pages/models/post';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

    transform(posts: IPost[], term: string): IPost[] {
        return posts.filter(function (post) {
            return post.user.name.includes(term);
        });
      }

}