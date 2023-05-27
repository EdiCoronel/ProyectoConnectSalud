import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { Component, NgModule } from '@angular/core'

import {
  InicioComponent,
  PlanesComponent,
  ContactoComponent,
  RecetasComponent,
  LoginComponent,
  RegisterComponent,
  MonitoreodepesoComponent,
  GuiadealimentacionComponent,
  TurnosComponent,
  CarritoComponent,
  ListCitasComponent,
  EditCitasComponent,
  ListUsersComponent,
  PerfilComponent,
  EditPerfilComponent,
} from "./components/index.paginas"



const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'planes', component: PlanesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'recetas', component: RecetasComponent, canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'monitoreodepeso', component: MonitoreodepesoComponent, canActivate:[AuthGuard]},
    { path: 'guiadealimentacion', component: GuiadealimentacionComponent, canActivate:[AuthGuard]},
    { path: 'turnos', component: TurnosComponent, canActivate:[AuthGuard]},
    { path: 'carrito', component: CarritoComponent},
    { path: 'list-citas', component: ListCitasComponent, canActivate:[AuthGuard]},
    { path: 'edit-citas', component: EditCitasComponent, canActivate:[AuthGuard]},
    { path: 'edit/:id_paciente', component:EditCitasComponent, canActivate:[AuthGuard]},
    { path: 'list-users', component: ListUsersComponent, canActivate:[AuthGuard]},
    { path: 'perfil', component: PerfilComponent, canActivate:[AuthGuard]},
    {path: 'edit-perfil', component: EditPerfilComponent, canActivate:[AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

export const app_routing = RouterModule.forRoot(routes, { useHash:true });