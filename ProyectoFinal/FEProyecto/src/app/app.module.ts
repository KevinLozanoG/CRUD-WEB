import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarPersonaComponent } from './components/agregar-editar-persona/agregar-editar-persona.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPersonaComponent } from './components/list-persona/list-persona.component';
import { VerPersonaComponent } from './components/ver-persona/ver-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarPersonaComponent,
    NavbarComponent,
    ListPersonaComponent,
    VerPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
