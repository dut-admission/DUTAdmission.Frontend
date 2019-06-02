import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ClipboardModule} from 'ngx-clipboard';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/admin-pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/admin-pages/icons/icons.component';
import {MapsComponent} from '../../pages/admin-pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/admin-pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/admin-pages/tables/tables.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StudentListComponent} from '../../pages/admin-pages/students/student-list/student-list.component';
import {DocumentListComponent} from '../../pages/admin-pages/documents/document-list/document-list.component';
import {SafePipe} from '../../_pipe/safe.pipe';
import {TuitionListComponent} from '../../pages/admin-pages/tuitions/tuition-list/tuition-list.component';
import {UserListComponent} from '../../pages/admin-pages/users/user-list/user-list.component';
import {UserGroupListComponent} from '../../pages/admin-pages/user-groups/user-group-list/user-group-list.component';
import {PermissionComponent} from '../../pages/admin-pages/permission/permission.component';
import {DocumentTypeListComponent} from '../../pages/admin-pages/documents-type/document-type-list/document-type-list.component';
import {TuitionTypeListComponent} from '../../pages/admin-pages/tuition-type/tuition-type-list/tuition-type-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    SafePipe,
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    StudentListComponent,
    DocumentListComponent,
    TuitionListComponent,
    UserListComponent,
    UserGroupListComponent,
    PermissionComponent,
    DocumentTypeListComponent,
    TuitionTypeListComponent
  ]
})

export class AdminLayoutModule {
}
