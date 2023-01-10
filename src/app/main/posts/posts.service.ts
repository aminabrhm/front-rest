import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpService } from 'src/app/shared/services/http.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class PostsService {


    constructor(private http: HttpService, public router: Router) { }

    getPosts() {
        return this.http.Get(`${environment.apiUrl}post`)
            .pipe(
                map((next: any) => next),
                catchError(() => of(null))
            )
    }
}