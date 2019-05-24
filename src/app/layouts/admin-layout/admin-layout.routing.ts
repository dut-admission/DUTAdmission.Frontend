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

];
