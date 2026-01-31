import { Injectable, signal } from '@angular/core';

export type Theme = 'light-theme' | 'dark-theme' | 'purple-theme' | 'green-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = signal<Theme>('light-theme');
  
  theme = this.currentTheme.asReadonly();

  constructor() {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('app-theme') as Theme;
    if (savedTheme) {
      this.setTheme(savedTheme);
    }
  }

  setTheme(theme: Theme): void {
    // Remove all theme classes
    document.documentElement.classList.remove('light-theme', 'dark-theme', 'purple-theme', 'green-theme');
    
    // Add new theme class (except for light which is default)
    if (theme !== 'light-theme') {
      document.documentElement.classList.add(theme);
    }
    
    // Save to localStorage
    localStorage.setItem('app-theme', theme);
    this.currentTheme.set(theme);
  }

  toggleTheme(): void {
    const themes: Theme[] = ['light-theme', 'dark-theme', 'purple-theme', 'green-theme'];
    const currentIndex = themes.indexOf(this.currentTheme());
    const nextIndex = (currentIndex + 1) % themes.length;
    this.setTheme(themes[nextIndex]);
  }
}
