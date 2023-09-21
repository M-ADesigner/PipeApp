import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [],
})
export class BasicsPageComponent {
  public nameLower: string = 'maicol';
  public nameUpper: string = 'MAICOL';
  public nameFullName: string = 'MaICoL AvILa';

  public customDate: Date = new Date();
}
