import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isDark = signal<boolean>(true);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const isDarkActive = currentTheme !== 'light';
        this.isDark.set(isDarkActive);
        document.documentElement.setAttribute('data-theme', isDarkActive ? 'dark' : 'light');
        document.documentElement.setAttribute('data-accent', 'monochrome');
      } catch {
        this.isDark.set(true);
      }
    }
  }

  toggleTheme(): void {
    const next = !this.isDark();
    this.isDark.set(next);
    if (isPlatformBrowser(this.platformId)) {
      try {
        const nextTheme = next ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', nextTheme);
        document.documentElement.setAttribute('data-accent', 'monochrome');
        localStorage.setItem('dcss-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
      } catch {
        // Ignore storage restrictions in private contexts
      }
    }
  }
}
