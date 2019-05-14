import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';

import { LoginComponent } from '../../pages/auth-pages/login/login.component';
import { RegisterComponent } from '../../pages/auth-pages/register/register.component';
import {NgxLoadingModule} from 'ngx-loading';
import {ForgetPasswordComponent} from '../../pages/auth-pages/forget-password/forget-password.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    NgxLoadingModule,
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ]
})
export class AuthLayoutModule { }
