import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'canFly' })
export class CanFlyPipe implements PipeTransform {
  transform(boolean: boolean): string {
    return boolean ? 'Puede volar' : 'No puede volar';
  }
}
