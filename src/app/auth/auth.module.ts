
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.modulo';



import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from '../dashboard/layout/layout.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  declarations: [

    LoginPageComponent,
    RegisterPageComponent,
    LayoutComponent,
    RegisterPageComponent,
    AuthLayoutComponent,




  ],
  imports: [

    RouterModule,
    MaterialModule,
    AuthRoutingModule


  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AuthModule { }
