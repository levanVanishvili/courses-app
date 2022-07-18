import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(number: number): string {
    const hoursValue = Math.floor(number / 60);
    const minutes = Math.floor(number % 60);
    const hours = hoursValue < 10? '0' + hoursValue : hoursValue;
    return  hours + ':' + minutes + ' hours';
  }

}
