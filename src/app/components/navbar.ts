import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="portfolio-header">
      <nav class="dcss-container portfolio-nav">
        <a href="#" class="portfolio-brand">
          <span class="portfolio-brand-mark">DC</span>
          <span>Daniel Cossio</span>
        </a>

        <!-- Main section links -->
        <div class="portfolio-nav-links">
          <a href="#about" class="portfolio-nav-link">About</a>
          <a href="#experience" class="portfolio-nav-link">Experience</a>
          <a href="#skills" class="portfolio-nav-link">Skills</a>
          <a href="#projects" class="portfolio-nav-link">Projects</a>
          <a href="#cv" class="portfolio-nav-link">Resume</a>
        </div>

        <!-- Theme toggle, GitHub link, and CTA -->
        <div class="portfolio-nav-actions">
          <button
            type="button"
            (click)="themeService.toggleTheme()"
            class="dcss-btn dcss-btn-secondary dcss-btn-sm dcss-btn-icon"
            [attr.aria-label]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
            [title]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'">
            @if (themeService.isDark()) {
              <mat-icon>light_mode</mat-icon>
            } @else {
              <mat-icon>dark_mode</mat-icon>
            }
          </button>

          <a
            href="https://github.com/Daniel-Cossio"
            target="_blank"
            rel="noopener noreferrer"
            class="dcss-btn dcss-btn-ghost dcss-btn-sm dcss-btn-icon"
            aria-label="GitHub Profile"
            title="GitHub Profile">
            <mat-icon>code</mat-icon>
          </a>

          <a href="#contact" class="dcss-btn dcss-btn-primary dcss-btn-sm">
            <span>Get in touch</span>
            <kbd class="dcss-kbd dcss-kbd-sm">↗</kbd>
          </a>
        </div>
      </nav>
    </header>
  `
})
export class NavbarComponent {
  readonly themeService = inject(ThemeService);
}
