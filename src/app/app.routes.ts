
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './pages/inicio/inicio.component';

const appRoutes: Routes = [
    {path: 'Inicio', component:InicioComponent},
    { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
    { path: '**', redirectTo: '/Inicio', pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});