import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tndCurrency'
})
export class TndCurrencyPipe implements PipeTransform {
  transform(value: number|undefined): string {
    if (value === null || value === undefined) return '0 DT';

    const formattedValue = new Intl.NumberFormat('fr-TN', {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3
    }).format(value);

    return `${formattedValue} DT`;
  }
}
