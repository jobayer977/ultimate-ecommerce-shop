import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationInterceptor implements HttpInterceptor {
  private readonly matchedUrl: string[] = [
    `${environment.API_ENDPOINT}/login/admin`,
    `${environment.API_ENDPOINT}/register/admin`,
  ];
  constructor(private readonly authService: AuthService) {}

  //!Interceptor
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.authService.getAuthorizationToken();
    if (this.matchedUrl.includes(req.url) === true && authToken === false) {
      return next.handle(req);
    } else {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`),
      });
      return next.handle(authReq);
    }
  }
}
