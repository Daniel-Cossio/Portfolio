import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-200">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2 text-gray-900 dark:text-white font-bold text-lg tracking-tight hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          <span class="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono text-sm font-semibold shadow-xs">DC</span>
          <span>Daniel Cossio</span>
        </a>

        <!-- Main section links -->
        <div class="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#about" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About</a>
          <a href="#experience" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Experience</a>
          <a href="#skills" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Skills</a>
          <a href="#projects" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#cv" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Resume</a>
        </div>

        <!-- Theme toggle, GitHub link, and CTA -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Dark / Light Mode Toggle -->
          <button (click)="themeService.toggleTheme()" 
                  class="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center cursor-pointer"
                  [attr.aria-label]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
                  [title]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'">
            @if (themeService.isDark()) {
              <mat-icon class="text-xl text-amber-400">light_mode</mat-icon>
            } @else {
              <mat-icon class="text-xl text-gray-600">dark_mode</mat-icon>
            }
          </button>

          <a href="https://github.com/Daniel-Cossio" target="_blank" rel="noopener noreferrer" 
             class="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
             aria-label="GitHub Profile">
            <mat-icon class="text-xl">code</mat-icon>
          </a>
          <a href="#contact" 
             class="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  `
})
export class NavbarComponent {
  readonly themeService = inject(ThemeService);
}
