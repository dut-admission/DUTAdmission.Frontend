import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/auth-pages/login/login.component';
import { RegisterComponent } from '../../pages/auth-pages/register/register.component';
import {ForgetPasswordComponent} from '../../pages/auth-pages/forget-password/forget-password.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'forget-password',       component: ForgetPasswordComponent }
];
