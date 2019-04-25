import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/auth-pages/login/login.component';
import { RegisterComponent } from '../../pages/auth-pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent }
];
