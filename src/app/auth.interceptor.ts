import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let userInfo = localStorage.getItem('accessToken')  ;
    let token = userInfo ? userInfo : '';

    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': "afaf",
          'Content-Type': 'application/json',
        }
      });
    }
    else {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
        }
      });
    }
    return next.handle(request);
  }
}
