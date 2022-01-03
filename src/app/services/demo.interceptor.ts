import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';


@Injectable() 
export class DemoInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const hardcodedToken = '1a3456b-079-4567-5432-t23456';

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${hardcodedToken}`
      }
    });
      return next.handle(req)
        .pipe(
          retry(2),

          catchError((error: HttpErrorResponse) => {
            alert(`Http Error: ${req.url}`);
            return throwError(error);
          }),

          finalize(() => {
            const msg =  `${req.method} "${req.urlWithParams}"`;
            console.log(msg);
          })
        );
  }
}