import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {PublicLayoutRoutes} from './public-layout.routing';
import {LandingComponent} from '../../pages/public-page/landing/landing.component';
import {ProfileComponent} from '../../pages/public-page/profile/profile.component';
import {PublicFooterComponent} from '../../shared/public-footer/public-footer.component';
import {PublicNavbarComponent} from '../../shared/public-navbar/public-navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeadroomModule} from '@ctrl/ngx-headroom';
import {InstructionComponent} from '../../pages/public-page/instruction/instruction.component';

@NgModule({
  declarations: [
    LandingComponent,
    ProfileComponent,
    PublicFooterComponent,
    PublicNavbarComponent,
    InstructionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PublicLayoutRoutes),
    FormsModule,
    NgbModule,
    HeadroomModule,
    // NgbModule
  ],
  exports: [
    PublicFooterComponent,
    PublicNavbarComponent
  ]
})
export class PublicLayoutModule {
}
