// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosLosCursosComponent } from './pages/todos-los-cursos.component';
import { ProgramasDeEstudioComponent } from './pages/programas-de-estudio.component';
import { MasTalentoComponent } from './pages/mas-talento.component';
import { DevtallesParaEmpresasComponent } from './pages/devtalles-para-empresas.component';
import { MiPortalComponent } from './enrollments/mi-portal.component';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  { path: 'auth',
  loadChildren:() => import('./auth/auth.module') .then( m => m.AuthModule),
},
  { path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule),},
  //{ path: '', redirectTo: '/app', pathMatch: 'full' },//
  //{ path: 'todos-los-cursos', component: TodosLosCursosComponent },
  //{ path: 'programas-de-estudio', component: ProgramasDeEstudioComponent },
  //{ path: 'mas-talento', component: MasTalentoComponent },
  //{ path: 'devtalles-para-empresas', component: DevtallesParaEmpresasComponent },
  //{ path: 'mi-portal', component: MiPortalComponent }
  {path: '**',
  redirectTo: 'auth'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
