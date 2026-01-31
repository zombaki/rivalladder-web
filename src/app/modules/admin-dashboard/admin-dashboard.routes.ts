import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';

export const adminDashboardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent
  }
];
