import * as _ from 'lodash';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private notification: NzNotificationService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        const errType = typeof error?.error.message;
        if (_.isArray(error?.error.errors) && !_.isEmpty(error?.error.errors)) {
          error?.error.errors.map((x: any) => {
            this.notification.error(String(x?.constraints?.matches), '');
          });
        } else if (errType === 'string') {
          this.notification.error(String(error?.error.message), '');
        } else if (errType === 'object') {
          this.notification.error(String(error?.error.message?.message), '');
        }
        return throwError(error);
      })
    );
  }
}
