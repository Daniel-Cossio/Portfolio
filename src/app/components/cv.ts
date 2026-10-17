import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="cv" class="py-20 bg-white dark:bg-gray-950 px-4 border-t border-gray-100 dark:border-gray-800 transition-colors duration-200">
      <div class="max-w-4xl mx-auto text-center">
        <span class="text-emerald-600 dark:text-emerald-400 font-mono text-sm font-semibold tracking-wider uppercase">Credentials</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 font-sans">Curriculum Vitae / Resume</h2>
        <p class="text-gray-600 dark:text-gray-400 mt-3 mb-10 max-w-2xl mx-auto leading-relaxed">
          Download my updated resume for an exhaustive overview of enterprise architectural experience, technology stack, and career milestones.
        </p>

        <div class="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
          <a href="assets/cv-en.pdf" target="_blank" rel="noopener noreferrer" download="Daniel_Cossio_Resume_EN.pdf"
             class="inline-flex items-center gap-2.5 px-7 py-4 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all shadow-sm hover:shadow w-full sm:w-auto justify-center group">
            <mat-icon class="text-xl">download</mat-icon>
            <span>Download Resume (English)</span>
          </a>
          <a href="assets/cv-es.pdf" target="_blank" rel="noopener noreferrer" download="Daniel_Cossio_CV_ES.pdf"
             class="inline-flex items-center gap-2.5 px-7 py-4 bg-gray-900 dark:bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-700 border border-transparent dark:border-gray-700 transition-all shadow-sm hover:shadow w-full sm:w-auto justify-center group">
            <mat-icon class="text-xl">download</mat-icon>
            <span>Descargar CV (Español)</span>
          </a>
        </div>
        <p class="text-xs text-gray-400 dark:text-gray-500 mt-4 font-mono">
          PDF format • Compiled with LuaLaTeX & moderncv
        </p>
      </div>
    </section>
  `
})
export class CvComponent {}
