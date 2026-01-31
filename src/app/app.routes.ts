import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.routes').then(m => m.loginRoutes)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./modules/admin-login/admin-login.routes').then(m => m.adminLoginRoutes)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin-dashboard/admin-dashboard.routes').then(m => m.adminDashboardRoutes),
    canActivate: [adminGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.routes').then(m => m.dashboardRoutes),
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
