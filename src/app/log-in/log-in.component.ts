import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as AppActions from '../state/app.actions';
import * as fromApp from '../state/app.reducer';
import { Store } from '@ngrx/store';
import { NbThemeService, NbMediaBreakpoint } from '@nebular/theme';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInComponent implements OnInit {

  value = ``;

  value1 = ``;

  color$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color')),
  );

  color1$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color1')),
  );

  color2$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color2')),
  );

  color3$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color3')),
  );

  responsiveConfig = 
  {
    "0": {
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`basic`)
    },
    "320": {
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`basic`)
    },
    "480": {
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`basic`)
    },
    "768": {
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`basic`)
    },
    "1024": {
      "color": of(`basic`),
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`basic`)
    }
  };

  constructor(private themeService: NbThemeService,
              private store: Store<fromApp.State>) { }  
  
  private getCurrentValue(breakpoint: NbMediaBreakpoint, propName: string, ...itemsArgs: any[]): string {
    const bpConfig = this.responsiveConfig[breakpoint.width];
    let result; 
    if (bpConfig && bpConfig[propName]) {
      result = bpConfig[propName];
    } else {
      result = this.getParentBreakpointValue(breakpoint, propName);
    }
    if (itemsArgs.length) {
      return result(...itemsArgs);
    }
    return result;
  }
  
  private getParentBreakpointValue(breakpoint: NbMediaBreakpoint, propName: string): string {
    let result: string;
    for (const bp of Object.keys(this.responsiveConfig)) {
      if (+bp > breakpoint.width && !!this.responsiveConfig[bp][propName]) {
        result = this.responsiveConfig[bp][propName];
        break;
      }
    }
    return result;
  }

  dashboardPage(event) {
    this.store.dispatch(AppActions.dashboardPage({ param: event }));
  }

  ngOnInit(): void {
  }

}
