import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { ProdCuidadoBucalComponent } from './prod-cuidado-bucal/prod-cuidado-bucal.component';
import { ProdPapelComponent } from './prod-papel/prod-papel.component';
import { ProdJabonesComponent } from './prod-jabones/prod-jabones.component';
import { ProdLimpiezaComponent } from './prod-limpieza/prod-limpieza.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProdLicoresComponent } from './prod-licores/prod-licores.component';
import { ProdAgripacComponent } from './prod-agripac/prod-agripac.component';
import { ProdEstrellaComponent } from './prod-estrella/prod-estrella.component';
import { ProdDulcesComponent } from './prod-dulces/prod-dulces.component';
import { MhgroupComponent } from './mhgroup/mhgroup.component';
import { HistoriaComponent } from './historia/historia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MuseoComponent } from './museo/museo.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
      
{ path: 'Inicio', component:InicioComponent}, 
{ path: 'Producto', component:ProductoComponent}, 
{ path: 'Nosotros', component:NosotrosComponent},
{ path: 'ProductoColgate', component:ProdCuidadoBucalComponent}, 
{ path: 'ProductoPapel', component:ProdPapelComponent}, 
{ path: 'ProductoJabon', component:ProdJabonesComponent}, 
{ path: 'ProductoLimpieza', component:ProdLimpiezaComponent}, 
{ path: 'ProductoLicor', component:ProdLicoresComponent}, 
{ path: 'ProductoAgripac', component:ProdAgripacComponent}, 
{ path: 'ProductoEstrella', component:ProdEstrellaComponent}, 
{ path: 'ProductoDulce', component:ProdDulcesComponent}, 
{ path: 'mhgroup', component:MhgroupComponent}, 
{ path: 'historia', component:HistoriaComponent}, 
{ path: 'contacto', component:ContactoComponent},
{ path: 'museo', component:MuseoComponent},
        { path: '', redirectTo: '/Inicio', pathMatch: 'full' }
        ]
    }
];



export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);