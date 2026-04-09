import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-20 text-center px-4">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 font-sans">
        Hola, soy <span class="text-emerald-600">Tu Nombre</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-mono">
        Fullstack Developer & DevOps Engineer
      </p>
      <p class="mt-4 text-gray-500 max-w-xl mx-auto">
        Construyendo aplicaciones web escalables y automatizando infraestructuras para un despliegue continuo y eficiente.
      </p>
    </section>
  `
})
export class HeroComponent {}
