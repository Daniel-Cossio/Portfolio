import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2 text-gray-900 font-bold text-lg tracking-tight hover:text-emerald-600 transition-colors">
          <span class="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono text-sm font-semibold">DC</span>
          <span>Daniel Cossio</span>
        </a>

        <!-- Main section links (without redundant Contact link) -->
        <div class="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
          <a href="#about" class="hover:text-emerald-600 transition-colors">About</a>
          <a href="#experience" class="hover:text-emerald-600 transition-colors">Experience</a>
          <a href="#skills" class="hover:text-emerald-600 transition-colors">Skills</a>
          <a href="#projects" class="hover:text-emerald-600 transition-colors">Projects</a>
          <a href="#cv" class="hover:text-emerald-600 transition-colors">Resume</a>
        </div>

        <!-- Primary CTA and GitHub profile -->
        <div class="flex items-center gap-3">
          <a href="https://github.com/Daniel-Cossio" target="_blank" rel="noopener noreferrer" 
             class="text-gray-500 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100"
             aria-label="GitHub Profile">
            <mat-icon class="text-xl">code</mat-icon>
          </a>
          <a href="#contact" 
             class="px-4 py-2 text-xs sm:text-sm font-semibold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  `
})
export class NavbarComponent {}
