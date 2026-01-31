import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'ladder',
        loadChildren: () => import('../ladder/ladder.routes').then(m => m.ladderRoutes)
      },
      {
        path: 'challenges',
        loadChildren: () => import('../challenges/challenges.routes').then(m => m.challengesRoutes)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.routes').then(m => m.profileRoutes)
      }
    ]
  }
];
