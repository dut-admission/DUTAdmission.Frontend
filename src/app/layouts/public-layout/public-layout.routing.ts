import {Routes} from '@angular/router';
import {LandingComponent} from '../../pages/public-page/landing/landing.component';
import {ProfileComponent} from '../../pages/public-page/profile/profile.component';
import {InstructionComponent} from '../../pages/public-page/instruction/instruction.component';

export const PublicLayoutRoutes: Routes = [
  {path: 'home', component: LandingComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'instruction', component: InstructionComponent},

];
