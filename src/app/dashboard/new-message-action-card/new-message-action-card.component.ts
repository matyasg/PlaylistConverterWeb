import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import { NbThemeService, NbMediaBreakpoint } from '@nebular/theme';
import { switchMap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {User} from '../../shared/model';

@Component({
  selector: 'app-new-message-action-card',
  templateUrl: './new-message-action-card.component.html',
  styleUrls: ['./new-message-action-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewMessageActionCardComponent implements OnInit {
  @Input() platform: string;
  @Input() user: Observable<User>;
  @Input() login: () => void;
  @Input() getPlaylist: () => void;

  src$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'src')),
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
      "color2": of(`basic`)
    },
    "320": {
      "color1": of(`basic`),
      "color2": of(`basic`)
    },
    "480": {
      "color1": of(`basic`),
      "color2": of(`basic`)
    },
    "768": {
      "color1": of(`basic`),
      "color2": of(`basic`)
    },
    "1024": {
      "src": of(`./assets/images/black-girl-min.jpg`),
      "color": of(`basic`),
      "color1": of(`basic`),
      "color2": of(`primary`),
      "status": of(``),
      "accent": of(`warning`)
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
