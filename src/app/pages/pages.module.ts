import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { PAGES_ROUTES } from './pages.routes';
import { ProductoComponent } from './producto/producto.component';
import { ProdCuidadoBucalComponent } from './prod-cuidado-bucal/prod-cuidado-bucal.component';
import { ProdPapelComponent } from './prod-papel/prod-papel.component';
import { ProdJabonesComponent } from './prod-jabones/prod-jabones.component';
import { ProdLimpiezaComponent } from './prod-limpieza/prod-limpieza.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProdLicoresComponent } from './prod-licores/prod-licores.component';
import { ProdAgripacComponent } from './prod-agripac/prod-agripac.component';
import { ProdDulcesComponent } from './prod-dulces/prod-dulces.component';
import { ProdEstrellaComponent } from './prod-estrella/prod-estrella.component';
import { MhgroupComponent } from './mhgroup/mhgroup.component';
import { HistoriaComponent } from './historia/historia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MuseoComponent } from './museo/museo.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ProdBebidasComponent } from './prod-bebidas/prod-bebidas.component';
import { ProdFideosComponent } from './prod-fideos/prod-fideos.component';
import { ProdAvenaComponent } from './prod-avena/prod-avena.component';
import { ProdBebidaCalComponent } from './prod-bebida-cal/prod-bebida-cal.component';




@NgModule({
  declarations: [PagesComponent, InicioComponent, ProductoComponent, ProdCuidadoBucalComponent, ProdPapelComponent, ProdJabonesComponent, ProdLimpiezaComponent, NosotrosComponent, ProdLicoresComponent, ProdAgripacComponent, ProdDulcesComponent, ProdEstrellaComponent, MhgroupComponent, HistoriaComponent, ContactoComponent, MuseoComponent, NoticiasComponent, ProdBebidasComponent, ProdFideosComponent, ProdAvenaComponent, ProdBebidaCalComponent],
  exports: [
    PagesComponent,
    InicioComponent,
    ProductoComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    PAGES_ROUTES

  ],
})
export class PagesModule { }
