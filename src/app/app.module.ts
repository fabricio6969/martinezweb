import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    PagesModule,
    APP_ROUTES,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
