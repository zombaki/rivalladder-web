import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthSelectors from '../../store/auth/auth.selectors';
import * as AuthActions from '../../store/auth/auth.actions';
import { User } from '../../core/models';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  currentUser$: Observable<User | null>;
  isMobile = window.innerWidth < 768;

  menuItems = [
    { path: '/dashboard/home', icon: 'home', label: 'Home' },
    { path: '/dashboard/ladder', icon: 'leaderboard', label: 'Ladder' },
    { path: '/dashboard/challenges', icon: 'sports_tennis', label: 'Challenges' },
    { path: '/dashboard/profile', icon: 'person', label: 'My Profile' }
  ];

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.currentUser$ = this.store.select(AuthSelectors.selectCurrentUser);
  }

  ngOnInit(): void {
    // Load current user if not loaded
    this.store.dispatch(AuthActions.loadCurrentUser());
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
