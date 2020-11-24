import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbIconModule,
  NbButtonModule,
  NbDatepickerModule,
  NbMediaBreakpoint,
} from '@nebular/theme';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { RootEffects } from './state/root.effects';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from './state/app.reducer';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { LIGHT_THEME } from './theme';
import { AppleSigninModule } from 'ngx-apple-signin';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const mediaBreakpoints: NbMediaBreakpoint[] = [
  {
    name: 'xs',
    width: 0,
  },
  {
    name: 'sm',
    width: 320,
  },
  {
    name: 'md',
    width: 480,
  },
  {
    name: 'lg',
    width: 768,
  },
  {
    name: 'xl',
    width: 1024,
  },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    NbThemeModule.forRoot({ name: 'light' }, [LIGHT_THEME], mediaBreakpoints),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    SharedModule,
    AppRoutingModule,
    NbButtonModule,
    StoreModule.forRoot({ app: fromApp.reducer, router: routerReducer }),
    EffectsModule.forRoot(RootEffects),
    StoreRouterConnectingModule.forRoot(),
    AppleSigninModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
