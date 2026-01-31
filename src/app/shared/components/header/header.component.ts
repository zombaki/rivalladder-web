import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ThemeService, Theme } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  themes: { value: Theme; label: string; icon: string }[] = [
    { value: 'light-theme', label: 'Light', icon: 'light_mode' },
    { value: 'dark-theme', label: 'Dark', icon: 'dark_mode' },
    { value: 'purple-theme', label: 'Purple', icon: 'palette' },
    { value: 'green-theme', label: 'Green', icon: 'nature' }
  ];

  constructor(public themeService: ThemeService) {}

  getThemeIcon(): string {
    const currentTheme = this.themeService.theme();
    return this.themes.find(t => t.value === currentTheme)?.icon || 'palette';
  }

  getThemeLabel(): string {
    const currentTheme = this.themeService.theme();
    return this.themes.find(t => t.value === currentTheme)?.label || 'Theme';
  }
}
