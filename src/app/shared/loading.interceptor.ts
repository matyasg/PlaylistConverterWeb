import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingScreenService } from '../services/loading-screen/loading-screen.service';
import { finalize } from 'rxjs/operators';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  activeRequests = 0;

  constructor(private loadingScreenService: LoadingScreenService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.loadingScreenService.show('');
    }

    this.activeRequests++;
    return next.handle(request).pipe(
        finalize(() => {
          this.activeRequests--;
          if (this.activeRequests === 0) {
            this.loadingScreenService.hide();
          }
        })
    )
  };

}
