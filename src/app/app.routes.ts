import { Routes } from '@angular/router';
import path from 'path';
import { MenuAppComponent } from './feactures/menu-app/menu-app.component';
import { GestionarDocenteComponent } from './feactures/gestionar-docente/gestionar-docente.component';
import { GestionarCuestionarioComponent } from './feactures/gestionar-cuestionario/gestionar-cuestionario.component';

export const routes: Routes = [
    {path: '', redirectTo: '/menu', pathMatch: 'full'},
    {path:'menu', component:MenuAppComponent},
    {path:'gestionarDocente',component:GestionarDocenteComponent},
    {path:'gestionarCuestionario',component:GestionarCuestionarioComponent}
];




