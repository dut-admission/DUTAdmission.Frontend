import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {PublicLayoutModule} from './layouts/public-layout/public-layout.module';
import {HeadroomModule} from '@ctrl/ngx-headroom';
import { ListOfNewsComponent } from './pages/public-page/list-of-news/list-of-news.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    HeadroomModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    PublicLayoutModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    PublicLayoutComponent,
    ListOfNewsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
