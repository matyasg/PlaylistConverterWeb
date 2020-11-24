import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint } from '@nebular/theme';
import { switchMap } from 'rxjs/operators';
import {Observable, ObservableInput, of} from 'rxjs';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersTableComponent implements OnInit {
  @Input('playlists') playlists: Observable<any>;
  @Input('values') values: Observable<boolean[]>;
  @Input('checkedLists') checkedLists: Observable<boolean>;
  @Input() changeValue: (id: number) => void;
  @Input() getCoverage: () => void;
  @Input() createPlaylists: () => void;


  color$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color')),
  );

  color1$ = this.themeService.onMediaQueryChange().pipe(
    switchMap(([, breakpoint]) => this.getCurrentValue(breakpoint, 'color1')),
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
      "color": of(`basic`),
      "color1": of(`basic`)
    },
    "320": {
      "color1": of(`basic`)
    },
    "480": {
      "color1": of(`basic`)
    },
    "768": {
      "color1": of(`basic`)
    },
    "1024": {
      "color": of(`basic`),
      "color1": of(`primary`),
      "status": of(``),
      "accent": of(``)
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
