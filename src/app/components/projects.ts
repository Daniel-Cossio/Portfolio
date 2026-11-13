import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projects" class="portfolio-section portfolio-section--surface">
      <div class="dcss-container">
        <div class="portfolio-section-header">
          <span class="dcss-badge dcss-badge-primary dcss-badge-pill dcss-badge-mono">Open Source &amp; Research</span>
          <h2 class="portfolio-section-title">Featured Projects</h2>
          <p class="portfolio-section-subtitle">
            A selection of personal and academic open-source projects demonstrating design systems, distributed architectures, and clean engineering.
          </p>
        </div>

        <div class="dcss-grid dcss-grid-cols-2">
          @for (project of projects(); track project.id) {
            <article class="dcss-card dcss-card-interactive">
              <div class="dcss-card-header portfolio-card-header-wrap">
                <span class="dcss-badge dcss-badge-primary dcss-badge-mono">
                  {{ project.category }}
                </span>
                @if (project.highlight) {
                  <kbd class="dcss-kbd">{{ project.highlight }}</kbd>
                }
              </div>

              <div class="dcss-card-body">
                <h3 class="portfolio-project-title">{{ project.title }}</h3>
                <p class="portfolio-project-desc">{{ project.description }}</p>

                <div class="dcss-flex dcss-flex-wrap">
                  @for (tag of project.tags; track tag) {
                    <span class="dcss-badge dcss-badge-neutral dcss-badge-mono">
                      {{ tag }}
                    </span>
                  }
                </div>
              </div>

              <div class="dcss-action-bar">
                <div class="dcss-action-bar-group">
                  @if (project.repoUrl) {
                    <a [href]="project.repoUrl" target="_blank" rel="noopener noreferrer" class="dcss-action-item">
                      <mat-icon>code</mat-icon>
                      <span>View Repository</span>
                      <kbd class="dcss-kbd dcss-kbd-sm">↗</kbd>
                    </a>
                  }
                  @if (project.demoUrl) {
                    <a [href]="project.demoUrl" target="_blank" rel="noopener noreferrer" class="dcss-action-item">
                      <mat-icon>open_in_new</mat-icon>
                      <span>Live Showcase</span>
                      <kbd class="dcss-kbd dcss-kbd-sm">⌘</kbd>
                    </a>
                  }
                </div>
              </div>
            </article>
          }
        </div>

        <div class="portfolio-projects-cta">
          <a href="https://github.com/Daniel-Cossio?tab=repositories" target="_blank" rel="noopener noreferrer" class="dcss-btn dcss-btn-secondary">
            <span>Explore all repositories on GitHub</span>
            <kbd class="dcss-kbd dcss-kbd-sm">↗</kbd>
          </a>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      id: '0',
      category: 'Design System & UI Kit',
      highlight: 'Zero-Overhead • Raycast UI',
      title: 'dcss-ui (Minimalist Design System)',
      description: 'Framework-agnostic, dark-first web UI kit inspired by Raycast precision and Dieter Rams aesthetics. Features 6 anti-AI author palettes, tactile 3D keycaps, Spotlight command bars, split views, and accessible vanilla JS components under 43KB CSS.',
      tags: ['CSS Architecture', 'Design Tokens', 'Vanilla JS', 'ESM / NPM', 'Zero-Overhead', 'A11y'],
      repoUrl: 'https://github.com/Daniel-Cossio/dcss-ui',
      demoUrl: 'https://daniel-cossio.github.io/dcss-ui/'
    },
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
