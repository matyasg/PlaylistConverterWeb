import { Pipe, PipeTransform } from '@angular/core';
import { Params } from '@angular/router';

interface ArrayParam {
  name: string;
  value: string;
}

@Pipe({
  name: 'withQueryParams',
})
export class WithQueryParamsPipe implements PipeTransform {

  transform(value: any, data?: any, ...attr): string | Params {
    if (!value && !data) {
      return {};
    }

    const params: Params = this.prepareParams(data || value);
    if (!data) {
      return params;
    }

    const stringParams: string = this.getStringParams(params);
    const connector: string = (value as string).includes('?') ? '&' : '?';
    return `${value}${connector}${stringParams}`;
  }

  private getStringParams(params: Params): string {
    return Object.entries(params)
      .filter(([key]: [string, string]): boolean => !!key)
      .map(([key, value]: [string, string]): string => {
        if (!value) {
          return key;
        }
        return `${key}=${value}`;
      })
      .join('&');
  }

  private prepareParams(data: ArrayParam[] | Params): Params {
    if (Array.isArray(data)) {
      return data
        .filter(({ name, value }: ArrayParam): boolean => (!!name && !!value))
        .reduce((acc: Params, cur: ArrayParam) => {
          acc[cur.name] = cur.value;
          return acc;
        }, {});
    }
    return data;
  }
}
