import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/admin-pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/admin-pages/icons/icons.component';
import { MapsComponent } from '../../pages/admin-pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/admin-pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/admin-pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
