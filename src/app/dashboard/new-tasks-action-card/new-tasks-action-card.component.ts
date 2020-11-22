import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint } from '@nebular/theme';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-new-tasks-action-card',
  templateUrl: './new-tasks-action-card.component.html',
  styleUrls: ['./new-tasks-action-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTasksActionCardComponent implements OnInit {

  color1$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color1')),
  );

  color2$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color2')),
  );

  color3$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color3')),
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
      "color2": of(`basic`),
      "color3": of(`basic`)
    },
    "320": {
      "color2": of(`basic`),
      "color3": of(`basic`)
    },
    "480": {
      "color2": of(`basic`),
      "color3": of(`basic`)
    },
    "768": {
      "color2": of(`basic`),
      "color3": of(`basic`)
    },
    "1024": {
      "color1": of(`basic`),
      "color2": of(`basic`),
      "color3": of(`primary`),
      "status": of(``),
      "accent": of(`success`)
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
