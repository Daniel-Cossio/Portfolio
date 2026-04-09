import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-16 bg-gray-50 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 font-sans">Currículum Vitae</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Descarga mi currículum para conocer más sobre mi experiencia, habilidades y educación.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="assets/cv-es.pdf" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors shadow-sm w-full sm:w-auto justify-center">
            <mat-icon>download</mat-icon>
            Descargar CV (Español)
          </a>
          <a href="assets/cv-en.pdf" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-sm w-full sm:w-auto justify-center">
            <mat-icon>download</mat-icon>
            Download CV (English)
          </a>
        </div>
      </div>
    </section>
  `
})
export class CvComponent {}
