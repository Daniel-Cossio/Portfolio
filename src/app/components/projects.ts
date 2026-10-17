import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projects" class="py-20 px-4 max-w-6xl mx-auto bg-gray-50/40 dark:bg-gray-900/40 border-t border-gray-100 dark:border-gray-800 transition-colors duration-200">
      <div class="text-center mb-16">
        <span class="text-emerald-600 dark:text-emerald-400 font-mono text-sm font-semibold tracking-wider uppercase">Open Source & Research</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 font-sans">Featured Projects</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-3">
          A selection of personal and academic open-source projects demonstrating full-stack engineering, distributed architectures, and clean code.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        @for (project of projects(); track project.id) {
          <div class="bg-white dark:bg-gray-900 rounded-2xl p-7 shadow-xs border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-emerald-200 dark:hover:border-emerald-500/50 transition-all flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300">
                  {{ project.category }}
                </span>
                @if (project.highlight) {
                  <span class="text-xs text-gray-400 dark:text-gray-500 font-mono">{{ project.highlight }}</span>
                }
              </div>

              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {{ project.title }}
              </h3>
              
              <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {{ project.description }}
              </p>
            </div>
            
            <div>
              <div class="flex flex-wrap gap-1.5 mb-6">
                @for (tag of project.tags; track tag) {
                  <span class="px-2.5 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md font-mono border border-gray-100 dark:border-gray-700/60">
                    {{ tag }}
                  </span>
                }
              </div>
              
              <div class="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                @if (project.repoUrl) {
                  <a [href]="project.repoUrl" target="_blank" rel="noopener noreferrer" 
                     class="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-sm font-semibold">
                    <mat-icon class="text-base w-4 h-4 text-gray-500 dark:text-gray-400">code</mat-icon>
                    <span>View Repository</span>
                  </a>
                }
                <mat-icon class="text-gray-300 dark:text-gray-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all text-base w-4 h-4">arrow_forward</mat-icon>
              </div>
            </div>
          </div>
        }
      </div>

      <div class="text-center mt-12">
        <a href="https://github.com/Daniel-Cossio?tab=repositories" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          <span>Explore all repositories on GitHub</span>
          <mat-icon class="text-sm w-4 h-4">open_in_new</mat-icon>
        </a>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      id: '1',
      category: 'Full-Stack BFF Platform',
      highlight: 'Java 17 + Angular 21',
      title: 'Pokédex Pro (BFF Architecture)',
      description: 'High-performance Pokémon encyclopedia featuring a multithreaded Backend for Frontend (BFF) built with Java 17 and Spring Boot, paired with a zoneless Angular 21 frontend utilizing Signals, dark mode, and glassmorphism styling.',
      tags: ['Java 17', 'Spring Boot', 'Angular 21', 'Signals', 'Zoneless', 'BFF', 'Docker'],
      repoUrl: 'https://github.com/Daniel-Cossio/pokedex-web'
    },
    {
      id: '2',
      category: 'Undergraduate Thesis',
      highlight: 'Universidad del Valle',
      title: 'Soft Skills Learning Platform',
      description: 'Full-stack educational platform for interactive soft-skills training, evaluation workflows, and progress assessment. Engineered with a Python FastAPI backend and a modular React frontend with Material UI and Jest tests.',
      tags: ['FastAPI', 'Python 3.11', 'React', 'Material UI', 'SQLite', 'Jest'],
      repoUrl: 'https://github.com/Daniel-Cossio/TG2'
    },
    {
      id: '3',
      category: 'Cloud API & Microservices',
      highlight: 'Spring Boot + Docker',
      title: 'Supermarket Enterprise REST API',
      description: 'Production-ready RESTful web service for supermarket inventory and sales workflow management. Designed following clean architecture principles with Java Spring Boot, Gradle build automation, and Docker containerization.',
      tags: ['Java', 'Spring Boot', 'Gradle', 'Docker', 'REST API', 'Railway'],
      repoUrl: 'https://github.com/Daniel-Cossio/Supermercado'
    }
  ]);
}
