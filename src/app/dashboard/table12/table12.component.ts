import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint } from '@nebular/theme';
import { switchMap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-table12',
  templateUrl: './table12.component.html',
  styleUrls: ['./table12.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Table12Component implements OnInit {
  @Input('playlists') playlists: Observable<any>;

  value = false;

  label = `Facebook`;

  text = `clifton@twitter.com`;

  value1 = false;

  label1 = `Twitter`;

  text1 = `clifton@twitter.com`;

  value2 = false;

  label2 = `Yahoo`;

  text2 = `fmona_muller@yahoo.com`;

  value3 = false;

  label3 = `Yahoo`;

  text3 = `frieda_mosciski@yahoo.com`;

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

  color9$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color9')),
  );

  color10$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color10')),
  );

  color11$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color11')),
  );

  color12$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color12')),
  );

  color13$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color13')),
  );

  color14$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color14')),
  );

  color15$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color15')),
  );

  responsiveConfig =
  {
    '0': {
      'color': of(`basic`),
      'color1': of(`basic`),
      'color2': of(`basic`),
      'color3': of(`basic`),
      'color4': of(`basic`),
      'color5': of(`basic`),
      'color6': of(`basic`),
      'color7': of(`basic`),
      'color8': of(`basic`),
      'color9': of(`basic`),
      'color10': of(`basic`),
      'color11': of(`basic`),
      'color12': of(`basic`),
      'color13': of(`basic`),
      'color14': of(`basic`),
      'color15': of(`basic`)
    },
    '320': {
      'color': of(`basic`),
      'color1': of(`basic`),
      'color2': of(`basic`),
      'color3': of(`basic`),
      'color4': of(`basic`),
      'color5': of(`basic`),
      'color6': of(`basic`),
      'color7': of(`basic`),
      'color8': of(`basic`),
      'color9': of(`basic`),
      'color10': of(`basic`),
      'color11': of(`basic`),
      'color12': of(`basic`),
      'color13': of(`basic`),
      'color14': of(`basic`),
      'color15': of(`basic`)
    },
    '480': {
      'color': of(`basic`),
      'color1': of(`basic`),
      'color2': of(`basic`),
      'color3': of(`basic`),
      'color4': of(`basic`),
      'color5': of(`basic`),
      'color6': of(`basic`),
      'color7': of(`basic`),
      'color8': of(`basic`),
      'color9': of(`basic`),
      'color10': of(`basic`),
      'color11': of(`basic`),
      'color12': of(`basic`),
      'color13': of(`basic`),
      'color14': of(`basic`),
      'color15': of(`basic`)
    },
    '768': {
      'color': of(`basic`),
      'color1': of(`basic`),
      'color2': of(`basic`),
      'color3': of(`basic`),
      'color4': of(`basic`),
      'color5': of(`basic`),
      'color6': of(`basic`),
      'color7': of(`basic`),
      'color8': of(`basic`),
      'color9': of(`basic`),
      'color10': of(`basic`),
      'color11': of(`basic`),
      'color12': of(`basic`),
      'color13': of(`basic`),
      'color14': of(`basic`),
      'color15': of(`basic`)
    },
    '1024': {
      'color': of(`basic`),
      'color1': of(`basic`),
      'color2': of(`basic`),
      'color3': of(`basic`),
      'color4': of(`basic`),
      'color5': of(`basic`),
      'color6': of(`basic`),
      'color7': of(`basic`),
      'color8': of(`basic`),
      'color9': of(`basic`),
      'color10': of(`basic`),
      'color11': of(`basic`),
      'color12': of(`basic`),
      'color13': of(`basic`),
      'color14': of(`basic`),
      'color15': of(`basic`)
    }
  };

  constructor(private themeService: NbThemeService) {

  }

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

  ngOnInit(): void {
  }

}
