import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ThemeService, Theme } from '../../../core/services/theme.service';
import { User } from '../../../core/models';
import * as AuthSelectors from '../../../store/auth/auth.selectors';
import * as AuthActions from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentUser$: Observable<User | null>;
  isAuthenticated$: Observable<boolean>;

  themes: { value: Theme; label: string; icon: string }[] = [
    { value: 'light-theme', label: 'Light', icon: 'light_mode' },
    { value: 'dark-theme', label: 'Dark', icon: 'dark_mode' },
    { value: 'purple-theme', label: 'Purple', icon: 'palette' },
    { value: 'green-theme', label: 'Green', icon: 'nature' }
  ];

  menuItems = [
    { path: '/dashboard/ladder', icon: 'leaderboard', label: 'Ladder' },
    { path: '/dashboard/challenges', icon: 'sports_tennis', label: 'Challenges' }
  ];

  constructor(
    public themeService: ThemeService,
    private store: Store,
    private router: Router
  ) {
    this.currentUser$ = this.store.select(AuthSelectors.selectCurrentUser);
    this.isAuthenticated$ = this.store.select(AuthSelectors.selectIsAuthenticated);
  }

  getThemeIcon(): string {
    const currentTheme = this.themeService.theme();
    return this.themes.find(t => t.value === currentTheme)?.icon || 'palette';
  }

  getThemeLabel(): string {
    const currentTheme = this.themeService.theme();
    return this.themes.find(t => t.value === currentTheme)?.label || 'Theme';
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  login(): void {
    this.router.navigate(['/login']);
  }
}
