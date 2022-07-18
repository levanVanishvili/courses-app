import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner'
})
export class StringJoinerPipe implements PipeTransform {

  transform(array: string [], separator: string): string {

    return array.filter(val => typeof val === 'string' && val.length > 0).join(separator);
  }
}
