import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

import { routing, appRoutingProviders } from './app.routing';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraPipe,
    CursosComponent,
    ExternoComponent,
    HomeComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    ContactoComponent


  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
