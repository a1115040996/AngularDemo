import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';


@Injectable()
export class InterceptService  implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 出参请求头
    const editReq = req.clone({
      headers: req.headers.set('token', 'abck1234')
    });
    return next.handle(editReq);
  }
}
