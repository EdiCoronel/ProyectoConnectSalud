import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { app_routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PlanesComponent } from './components/planes/planes.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MonitoreodepesoComponent } from './components/monitoreodepeso/monitoreodepeso.component';
import { AuthGuard } from './guard/auth.guard';
import { CarritoComponent } from './components/carrito/carrito.component';
import { EditCitasComponent } from './components/edit-citas/edit-citas.component';
import { ListCitasComponent } from './components/list-citas/list-citas.component';
import { TurnosComponent } from './components/index.paginas';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { PerfilComponent } from './components/index.paginas'; './components/perfil/perfil.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { AuthService } from './services/auth.service';
import {AuthStateService} from './services/auth-state.service'
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    PlanesComponent,
    RecetasComponent,
    LoginComponent,
    RegisterComponent,
    MonitoreodepesoComponent,
    CarritoComponent,
    EditCitasComponent,
    ListCitasComponent,
    TurnosComponent,
    ListUsersComponent,
    PerfilComponent,
    EditUsersComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    AuthStateService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
