import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/admin-pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/admin-pages/icons/icons.component';
import {MapsComponent} from '../../pages/admin-pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/admin-pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/admin-pages/tables/tables.component';
import {StudentListComponent} from '../../pages/admin-pages/students/student-list/student-list.component';
import {DocumentListComponent} from '../../pages/admin-pages/documents/document-list/document-list.component';
import {TuitionListComponent} from '../../pages/admin-pages/tuitions/tuition-list/tuition-list.component';
import {UserListComponent} from '../../pages/admin-pages/users/user-list/user-list.component';
import {UserGroupListComponent} from '../../pages/admin-pages/user-groups/user-group-list/user-group-list.component';
import {PermissionComponent} from '../../pages/admin-pages/permission/permission.component';
import {DocumentTypeListComponent} from '../../pages/admin-pages/documents-type/document-type-list/document-type-list.component';
import {TuitionTypeListComponent} from '../../pages/admin-pages/tuition-type/tuition-type-list/tuition-type-list.component';
import {NewsListComponent} from '../../pages/admin-pages/news/news-list/news-list.component';
import {ContactListComponent} from '../../pages/admin-pages/contacts/contact-list/contact-list.component';
import {SettingSystemComponent} from '../../pages/admin-pages/setting-system/setting-system.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'admin/students', component: StudentListComponent},
  {path: 'admin/documents', component: DocumentListComponent},
  {path: 'admin/tuitions', component: TuitionListComponent},
  {path: 'admin/users', component: UserListComponent},
  {path: 'admin/user-groups', component: UserGroupListComponent},
  {path: 'admin/permissions', component: PermissionComponent},
  {path: 'admin/document-type', component: DocumentTypeListComponent},
  {path: 'admin/tuition-type', component: TuitionTypeListComponent},
  {path: 'admin/news', component: NewsListComponent},
  {path: 'admin/contacts', component: ContactListComponent},
  {path: 'admin/tuition-types', component: TuitionTypeListComponent},
  {path: 'admin/document-types', component: DocumentTypeListComponent},
  {path: 'admin/setting', component: SettingSystemComponent},


];
