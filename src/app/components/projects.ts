import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-20 px-4 max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center font-sans">Proyectos Destacados</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (project of projects(); track project.id) {
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ project.title }}</h3>
            <p class="text-gray-600 mb-6 flex-grow">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              @for (tag of project.tags; track tag) {
                <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full font-mono">
                  {{ tag }}
                </span>
              }
            </div>
            
            <div class="flex items-center gap-4 mt-auto pt-4 border-t border-gray-50">
              @if (project.repoUrl) {
                <a [href]="project.repoUrl" target="_blank" rel="noopener noreferrer" 
                   class="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-1 text-sm font-medium">
                  <mat-icon class="text-base w-4 h-4">code</mat-icon>
                  Repositorio
                </a>
              }
              @if (project.demoUrl) {
                <a [href]="project.demoUrl" target="_blank" rel="noopener noreferrer"
                   class="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-1 text-sm font-medium">
                  <mat-icon class="text-base w-4 h-4">open_in_new</mat-icon>
                  Demo
                </a>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      id: '1',
      title: 'Plataforma de E-Commerce Microservicios',
      description: 'Arquitectura basada en microservicios para una tienda online escalable. Implementación de CI/CD pipelines y orquestación de contenedores.',
      tags: ['Angular', 'Java', 'Spring Boot', 'Docker', 'Kubernetes'],
      repoUrl: 'https://github.com/tu-usuario/ecommerce-microservices'
    },
    {
      id: '2',
      title: 'Dashboard de Monitoreo Cloud',
      description: 'Panel de control en tiempo real para visualizar métricas de infraestructura AWS. Integración con CloudWatch y alertas automatizadas.',
      tags: ['Angular', 'TypeScript', 'AWS', 'Lambda', 'Tailwind CSS'],
      repoUrl: 'https://github.com/tu-usuario/cloud-dashboard',
      demoUrl: 'https://demo.tusitio.com/dashboard'
    },
    {
      id: '3',
      title: 'API Gateway & Auth Service',
      description: 'Servicio centralizado para enrutamiento de peticiones y autenticación JWT. Rate limiting y logging distribuido.',
      tags: ['Node.js', 'Express', 'Redis', 'Docker', 'GitHub Actions'],
      repoUrl: 'https://github.com/tu-usuario/api-gateway'
    }
  ]);
}
