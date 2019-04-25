import { Routes } from '@angular/router';
import {LandingComponent} from '../../pages/public-page/landing/landing.component';
import {ProfileComponent} from '../../pages/public-page/profile/profile.component';

export const PublicLayoutRoutes: Routes = [
  { path: 'home',             component: LandingComponent },
  { path: 'profile',  component: ProfileComponent },


];
