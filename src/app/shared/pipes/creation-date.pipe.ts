import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe extends DatePipe implements PipeTransform {

  override transform(date: any, format: any = 'dd.MM.YYYY'): any {

    return super.transform(date, format);
  }

}
