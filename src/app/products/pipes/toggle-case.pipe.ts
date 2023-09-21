import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCasePipe',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = true): string {
    return toUpper ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
  }
}
