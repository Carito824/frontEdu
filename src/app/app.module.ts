import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgramasDeEstudioComponent } from './pages/programas-de-estudio.component';
import { MasTalentoComponent } from './pages/mas-talento.component';
import { MiPortalComponent } from './enrollments/mi-portal.component';
import { TodosLosCursosComponent } from './pages/todos-los-cursos.component';
import { DevtallesParaEmpresasComponent } from './pages/devtalles-para-empresas.component';
import { NavbarComponent } from './barras/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    TodosLosCursosComponent,
    ProgramasDeEstudioComponent,
    MasTalentoComponent,
    DevtallesParaEmpresasComponent,
    MiPortalComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
