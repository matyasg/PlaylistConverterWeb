import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromApp from '../../state/app.reducer';
import * as appSelectors from '../../state/app.selectors';
import { withLatestFrom, map, switchMap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as AppActions from '../../state/app.actions';
import { NbThemeService, NbMediaBreakpoint } from '@nebular/theme';
import { of } from 'rxjs';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent implements OnInit {

  text = `So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the..`;

  sequenceSpace52$ = this.store.pipe(select(appSelectors.getStateMessages))
    .pipe(
      map(stateMessages => stateMessages),
    );

  text1 = `So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the..`;

  sequenceSpace521$ = this.store.pipe(select(appSelectors.getStateMessages))
    .pipe(
      map(stateMessages => stateMessages),
    );

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

  color4$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color4')),
  );

  color5$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color5')),
  );

  color6$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color6')),
  );

  color7$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color7')),
  );

  color8$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color8')),
  );

  status$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'status')),
  );

  accent$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'accent')),
  );

  responsiveConfig = 
  {
    "0": {
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`basic`),
      "color4": of(`basic`),
      "color5": of(`basic`),
      "color6": of(`basic`),
      "color7": of(`basic`),
      "color8": of(`basic`)
    },
    "320": {
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`basic`),
      "color4": of(`basic`),
      "color5": of(`basic`),
      "color6": of(`basic`),
      "color7": of(`basic`),
      "color8": of(`basic`)
    },
    "480": {
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`basic`),
      "color4": of(`basic`),
      "color5": of(`basic`),
      "color6": of(`basic`),
      "color7": of(`basic`),
      "color8": of(`basic`)
    },
    "768": {
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`basic`),
      "color4": of(`basic`),
      "color5": of(`basic`),
      "color6": of(`basic`),
      "color7": of(`basic`),
      "color8": of(`basic`)
    },
    "1024": {
      "color": of(`basic`),
      "color1": of(`primary`),
      "src": (item) => of(this.srcXl(item)),
      "color2": of(`basic`),
      "color3": of(`basic`),
      "color4": of(`primary`),
      "src1": (item) => of(this.srcXl1(item)),
      "color5": of(`basic`),
      "color6": of(`basic`),
      "color7": of(`primary`),
      "color8": of(`danger`),
      "status": of(``),
      "accent": of(``)
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

  srcXl = (item) => item.img;

  srcXl1 = (item) => item.img;

  src = (item) => this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'src', item)),
  );

  src1 = (item) => this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'src1', item)),
  );

  ngOnInit(): void {
    this.store.dispatch(AppActions.loadMessages({ param: null }));
  }

}
