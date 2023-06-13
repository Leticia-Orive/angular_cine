import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ActoresComponent } from './actores/actores.component';
import { CineComponent } from './cine/cine.component';
import { GrupoComponent } from './grupo/grupo.component';
import { LoginComponent } from './login/login.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SalasComponent } from './salas/salas.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ActoresComponent,
    CineComponent,
    GrupoComponent,
    LoginComponent,
    PeliculasComponent,
    SalasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
