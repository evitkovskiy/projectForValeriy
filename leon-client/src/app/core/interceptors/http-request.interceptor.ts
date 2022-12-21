import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, flatMap, retryWhen, timeout } from 'rxjs/operators';
import { TimeoutError } from 'rxjs/internal/util/TimeoutError';
import { MessageService } from 'src/app/shared/services';

export const TIMEOUT = 30000;
export const UPLOAD_TIMEOUT = 600000;

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private messageService: MessageService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let cloneReq;
    cloneReq = request.clone();
    const reqTimeout = request.reportProgress ? UPLOAD_TIMEOUT : TIMEOUT;

    return  next.handle(cloneReq).pipe(
        timeout(reqTimeout),
        retryWhen(error => this.handleRetries(error)),
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.handleErrorMessage(err);
            } else if (err.status === 404) {
              this.router.navigate(['404']);
            } else {
              this.handleErrorMessage(err);
            }
          }
          return throwError(err);
        })
      );
  }

  handleErrorMessage = (err: any) => {
    // Show message error
  };

  handleRetries(observable: Observable<any>): Observable<any> {
    return observable.pipe(flatMap((response) => {
      if (response instanceof TimeoutError) {
        return of(observable);
      }
      return throwError(response);
    }));
  }
}
