import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromApp from './app.reducer';
import * as fromRouter from '@ngrx/router-store';

  
export const getRouterState = createFeatureSelector<any>('router');

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(getRouterState);

export const getActiveRoute = createSelector(selectUrl, selectQueryParams, (url, queryParams) => {
  return { url, queryParams };
});


export const getAppState = createFeatureSelector<fromApp.State>('app');

export const getStateMessages = createSelector(getAppState, (state: fromApp.State) => state.stateMessages);

export const getUiInput = createSelector(getAppState, (state: fromApp.State) => state.uiInput);

export const getUiCheckbox = createSelector(getAppState, (state: fromApp.State) => state.uiCheckbox);

export const getUiCheckbox1 = createSelector(getAppState, (state: fromApp.State) => state.uiCheckbox1);

export const getUiCheckbox2 = createSelector(getAppState, (state: fromApp.State) => state.uiCheckbox2);

export const getUiCheckbox3 = createSelector(getAppState, (state: fromApp.State) => state.uiCheckbox3);

export const getUiCheckbox4 = createSelector(getAppState, (state: fromApp.State) => state.uiCheckbox4);

export const getUiCheckbox5 = createSelector(getAppState, (state: fromApp.State) => state.uiCheckbox5);

export const getUiCheckbox6 = createSelector(getAppState, (state: fromApp.State) => state.uiCheckbox6);

export const getUiCheckbox7 = createSelector(getAppState, (state: fromApp.State) => state.uiCheckbox7);

export const getUiCheckbox8 = createSelector(getAppState, (state: fromApp.State) => state.uiCheckbox8);

export const getUiCheckbox9 = createSelector(getAppState, (state: fromApp.State) => state.uiCheckbox9);

export const getUiInput271 = createSelector(getAppState, (state: fromApp.State) => state.uiInput271);

export const getUiInput281 = createSelector(getAppState, (state: fromApp.State) => state.uiInput281);

export const getUiInput24 = createSelector(getAppState, (state: fromApp.State) => state.uiInput24);

export const getUiInput25 = createSelector(getAppState, (state: fromApp.State) => state.uiInput25);

export const getUiInput26 = createSelector(getAppState, (state: fromApp.State) => state.uiInput26);

export const getUiCheckbox61 = createSelector(getAppState, (state: fromApp.State) => state.uiCheckbox61);

export const getUiInput29 = createSelector(getAppState, (state: fromApp.State) => state.uiInput29);

