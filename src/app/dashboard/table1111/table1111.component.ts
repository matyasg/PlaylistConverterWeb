import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint } from '@nebular/theme';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-table1111',
  templateUrl: './table1111.component.html',
  styleUrls: ['./table1111.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Table1111Component implements OnInit {

  value = false;

  label = `Answer to Robert`;

  value1 = false;

  label1 = `New campaign message`;

  value2 = false;

  label2 = `Answer to Victoria`;

  value3 = false;

  label3 = `Update Twitter campaign for Site`;

  value4 = false;

  label4 = `Meeting with Henrick`;

  value5 = false;

  label5 = `Update Tracking board`;

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

  responsiveConfig = 
  {
    "0": {
      "color": of(`basic`),
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`basic`),
      "color4": of(`basic`),
      "color5": of(`basic`)
    },
    "320": {
      "color": of(`basic`),
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`basic`),
      "color4": of(`basic`),
      "color5": of(`basic`)
    },
    "480": {
      "color": of(`basic`),
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`basic`),
      "color4": of(`basic`),
      "color5": of(`basic`)
    },
    "768": {
      "color": of(`basic`),
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`basic`),
      "color4": of(`basic`),
      "color5": of(`basic`)
    },
    "1024": {
      "color": of(`basic`),
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`basic`),
      "color4": of(`basic`),
      "color5": of(`basic`)
    }
  };

  constructor(private themeService: NbThemeService) { }  
  
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
