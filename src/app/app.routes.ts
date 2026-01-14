import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/components/login/login.component').then(
            (m) => m.LoginComponent
          )
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/auth/components/register/register.component').then(
            (m) => m.RegisterComponent
          )
      }
    ]
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      )
  },
  {
    path: 'ladder',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/ladder/components/ladder-list/ladder-list.component').then(
        (m) => m.LadderListComponent
      )
  },
  {
    path: 'challenges',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/challenges/components/challenge-list/challenge-list.component').then(
        (m) => m.ChallengeListComponent
      )
  },
  {
    path: 'matches',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/matches/components/match-list/match-list.component').then(
            (m) => m.MatchListComponent
          )
      },
      {
        path: 'score/:id',
        loadComponent: () =>
          import('./features/matches/components/score-entry/score-entry.component').then(
            (m) => m.ScoreEntryComponent
          )
      }
    ]
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/users/components/user-profile/user-profile.component').then(
        (m) => m.UserProfileComponent
      )
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
