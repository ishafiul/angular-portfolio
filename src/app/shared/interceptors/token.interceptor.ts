import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {TokenService} from "../../auth/token.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  constructor(private tokenService : TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getAccessToken()
    if (token) {
      request = request.clone({
        setHeaders:{
          'autorization':`Bearer ${token}`
        }
      })
    }
    return next.handle(request)

  }
  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
  }

}
