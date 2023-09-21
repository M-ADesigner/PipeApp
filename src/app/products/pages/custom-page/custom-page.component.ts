import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styles: [],
})
export class CustomPageComponent {
  public isUpperCase: boolean = false;
  public orderBy: '' | keyof Hero | undefined = '';

  public products: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.black,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Darevil',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.black,
    },
  ];

  toogleUpperCase(): boolean {
    return (this.isUpperCase = !this.isUpperCase);
  }

  public changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
