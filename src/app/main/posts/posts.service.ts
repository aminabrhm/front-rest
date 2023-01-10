import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpService } from 'src/shared/services/http.service';
import { Router } from '@angular/router';
import { createQueryString } from 'src/shared/functions/createQueryString';

@Injectable({
    providedIn: 'root'
})

export class PostsService {


    constructor(private http: HttpService, public router: Router) { }

    getPosts(obj: any) {
        const query = createQueryString(obj)
        return this.http.Get(`${environment.apiUrl}post${query}`)
            .pipe(
                map((next: any) => next),
                catchError(() => of([]))
            )
    }
}