import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, PrimeNgModule, BrowserAnimationsModule],
  exports: [MenuComponent],
})
export class SharedModule {}
