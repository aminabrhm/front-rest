import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../models/login';
import { HttpService } from 'src/shared/services/http.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private isLoggedIn: boolean = false

    constructor(private http: HttpService, public router: Router) { }

    getProduct(id: number) {
        return this.http.Get(`${environment.apiUrl}/${id}`)
            .pipe(
                map((next: any) => next),
                catchError(() => of(null))
            )
    }

    login(logininfo: ILogin) {
        return this.http.Post(`${environment.apiUrl}auth/login`, logininfo)
    }

    logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.isLoggedIn = false
    }

    set loggedIn(isLoggedIn: boolean) {
        this.isLoggedIn = isLoggedIn
    }
    get loggedIn() {
        return this.isLoggedIn
    }
}
