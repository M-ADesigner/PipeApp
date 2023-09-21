import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

//Confiuracion del locale
import LocaleesClModule from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
registerLocaleData(LocaleesClModule);

@NgModule({
  declarations: [AppComponent],
  //Esteblecemos un idioma por defecto globalmente en toda la app
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CL',
    },
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
})
export class AppModule {}
