import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursDecimalFormat'
})
export class HoursDecimalFormatPipe implements PipeTransform {
  transform(totalSeconds: number|undefined): string {
    if (!totalSeconds || totalSeconds < 0) return '0 hours';

    const hours = totalSeconds / 3600;
    return `${hours.toFixed(1)}`;
  }
}
