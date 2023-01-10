import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  // TODO > add custom header
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req
    localStorage.getItem("token") && (
      authReq = req.clone({
        headers: new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        })
      }))

    return next.handle(authReq);
  }
}
