import {Routes} from '@angular/router';
import {LandingComponent} from '../../pages/public-page/landing/landing.component';
import {ProfileComponent} from '../../pages/public-page/profile/profile.component';
import {InstructionComponent} from '../../pages/public-page/instruction/instruction.component';
import {ListOfNewsComponent} from '../../pages/public-page/news/list-of-news/list-of-news.component';
import {NewsDetailComponent} from '../../pages/public-page/news/news-detail/news-detail.component';
import {AboutUsComponent} from '../../pages/public-page/about-us/about-us.component';
import {AdmissionPageComponent} from '../../pages/public-page/admission-page/admission-page.component';
import {AdmissionFormsComponent} from '../../pages/public-page/admission-page/admission-forms/admission-forms.component';
import {AdmissionDocsComponent} from '../../pages/public-page/admission-page/admission-docs/admission-docs.component';
import {TuitionComponent} from '../../pages/public-page/tuition/tuition.component';

export const PublicLayoutRoutes: Routes = [
  {path: 'home', component: LandingComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'instruction', component: InstructionComponent},
  {path: 'news', component: ListOfNewsComponent},
  {path: 'news/:id', component: NewsDetailComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'tuition', component: TuitionComponent},
  {path: 'admission', component: AdmissionPageComponent, children: [
      { path: ''		, redirectTo: 'form', pathMatch: 'full' },
      { path: 'form', component: AdmissionFormsComponent},
      { path: 'docs', component: AdmissionDocsComponent },
    ]}
];
