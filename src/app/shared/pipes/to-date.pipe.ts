import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDate',
})
export class ToDatePipe implements PipeTransform {
  transform(value: any): Date {
    if (value === null || value === undefined) {
      return value;
    }
    return new Date(value);
  }
}