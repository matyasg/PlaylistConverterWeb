import { Directive, Input, OnInit, OnDestroy, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { skip, map, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import * as AppActions from '../../state/app.actions';
import * as fromApp from '../../state/app.reducer';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[uiValueUpdate]',
})
export class UiValueUpdateDirective implements OnInit, OnDestroy {
  @Input() uiValueUpdate: string;
  @Output() uiControlChange = new EventEmitter();

  private destroy$ = new Subject();

  constructor(
    private ngControl: NgControl,
    private store: Store<fromApp.State>,
    private element: ElementRef,
  ) { }

  ngOnInit() {
    this.ngControl.control
      .valueChanges
      .pipe(
        this.isChanged(),
        this.fileMap(),
        takeUntil(this.destroy$),
      )
      .subscribe((value) => {
        this.store.dispatch(AppActions[this.uiValueUpdate]({ param: { value } }));
      });

    this.ngControl.control
      .valueChanges
      .pipe(
        skip(1),
        this.isChanged(),
        this.fileMap(),
        takeUntil(this.destroy$),
      )
      .subscribe((value) => {
        this.uiControlChange.emit(value);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  private isChanged() {
    return distinctUntilChanged((v1, v2) => {
      if (this.isDate(v1) && this.isDate(v2)) {
        return v1.getTime() === v2.getTime();
      } else {
        return v1 === v2;
      }
    });
  }

  private isDate(v: any): v is Date {
    return v instanceof Date;
  }

  private fileMap() {
    return map((value) => {
      if (this.element.nativeElement.type === 'file') {
        return { ...this.element.nativeElement.files };
      } else {
        return value;
      }
    });
  }
}