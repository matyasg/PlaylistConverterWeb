import { Injectable, Inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of, asyncScheduler } from 'rxjs';
import * as AppActions from './app.actions';
import { tap, catchError, map, mergeMap, share, withLatestFrom, observeOn, mapTo, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as fromApp from './app.reducer';
import * as appSelectors from './app.selectors';
import { select, Store } from '@ngrx/store';

@Injectable()
export class AppEffects {

  private logOut$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.logOut.type),
    mergeMap((action: { param: any }) => of({ data: action.param, error: null })
      .pipe(
        tap(({ data, error }) => this.router.navigateByUrl('/Log-in')),
      )
    ),
    share(),
  ), { dispatch: false });

  private loadMessages$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.loadMessages.type),
    mergeMap((action: { param: any }) => of({ data: action.param, error: null })
      .pipe(
        map(({ data, error }) => {
          // this can be replaced by a real HTTP call
          return [
            {
              user: 'Margo',
              img: 'https://sauibakeryprod.blob.core.windows.net/assets-container/assets/unabvvszsl/images/OJ84LP46qh',
              message: 'So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the..',
              date: '26 Apr',
            },
            {
              user: 'Elora',
              img: 'https://sauibakeryprod.blob.core.windows.net/assets-container/assets/unabvvszsl/images/yeD2m12srC',
              message: 'So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the..',
              date: '26 Apr',
            },
            {
              user: 'James',
              img: 'https://sauibakeryprod.blob.core.windows.net/assets-container/assets/unabvvszsl/images/WcovCqOYCr',
              message: 'So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the..',
              date: '26 Apr',
            },
          ];
        }),
        map(data => ({ data, error: null })),
        catchError(error => of({ data: null, error })),
        switchMap((data) => of(data).pipe(
          map(({ data, error }) => {  
            return data
          }),
          tap((value) => this.store.dispatch(AppActions.updateStateMessages({ stateMessages: value }))),
          mapTo(data),
        )),
        observeOn(asyncScheduler),
        catchError(error => of({ data: null, error })),
      )
    ),
    share(),
  ), { dispatch: false });

  private dashboardPage$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(AppActions.dashboardPage.type),
    mergeMap((action: { param: any }) => of({ data: action.param, error: null })
      .pipe(
        tap(({ data, error }) => this.router.navigateByUrl('/home')),
      )
    ),
    share(),
  ), { dispatch: false });

  constructor(private store: Store<fromApp.State>,
    private router: Router,
    private actions$: Actions) {
  }

}
