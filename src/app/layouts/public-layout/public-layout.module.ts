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
import {ListOfNewsComponent} from '../../pages/public-page/news/list-of-news/list-of-news.component';
import {NewsDetailComponent} from '../../pages/public-page/news/news-detail/news-detail.component';
import {AboutUsComponent} from '../../pages/public-page/about-us/about-us.component';
import {NgxLoadingModule} from 'ngx-loading';
import {AdmissionPageComponent} from '../../pages/public-page/admission-page/admission-page.component';
import {AdmissionTuitionComponent} from '../../pages/public-page/admission-page/admission-tuition/admission-tuition.component';
import {AdmissionDocsComponent} from '../../pages/public-page/admission-page/admission-docs/admission-docs.component';
import {AdmissionFormsComponent} from '../../pages/public-page/admission-page/admission-forms/admission-forms.component';

@NgModule({
  declarations: [
    LandingComponent,
    ProfileComponent,
    PublicFooterComponent,
    PublicNavbarComponent,
    InstructionComponent,
    ListOfNewsComponent,
    NewsDetailComponent,
    AboutUsComponent,
    AdmissionPageComponent,
    AdmissionTuitionComponent,
    AdmissionDocsComponent,
    AdmissionFormsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PublicLayoutRoutes),
    FormsModule,
    NgbModule,
    HeadroomModule,
    NgxLoadingModule,
    // NgbModule
  ],
  exports: [
    PublicFooterComponent,
    PublicNavbarComponent
  ]
})
export class PublicLayoutModule {
}
