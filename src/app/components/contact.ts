import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-16 bg-gray-900 text-white px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8 font-sans">Contacto & Redes</h2>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
          ¿Interesado en colaborar o tienes alguna pregunta? ¡Conectemos!
        </p>
        
        <div class="flex justify-center gap-6">
          <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer"
             class="p-4 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors group">
            <mat-icon class="text-gray-300 group-hover:text-white">work</mat-icon>
            <span class="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer"
             class="p-4 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors group">
            <mat-icon class="text-gray-300 group-hover:text-white">code</mat-icon>
            <span class="sr-only">GitHub</span>
          </a>
          <a href="mailto:tu@email.com"
             class="p-4 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors group">
            <mat-icon class="text-gray-300 group-hover:text-white">email</mat-icon>
            <span class="sr-only">Email</span>
          </a>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}
