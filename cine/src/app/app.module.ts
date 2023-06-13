import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ActoresComponent } from './actores/actores.component';
import { CineComponent } from './cine/cine.component';
import { GrupoComponent } from './grupo/grupo.component';
import { LoginComponent } from './login/login.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SalasComponent } from './salas/salas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClienteService } from './cliente/cliente.service';
import { PeliculasService } from './peliculas/peliculas.service';
import { CineService } from './cine/cine.service';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ActoresComponent,
    CineComponent,
    GrupoComponent,
    LoginComponent,
    PeliculasComponent,
    SalasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ClienteService, PeliculasService, CineService],
  bootstrap: [AppComponent],
})
export class AppModule {}
