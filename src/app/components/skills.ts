import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="skills" class="portfolio-section">
      <div class="dcss-container">
        <div class="portfolio-section-header">
          <span class="dcss-badge dcss-badge-primary dcss-badge-pill dcss-badge-mono">Technical Mastery</span>
          <h2 class="portfolio-section-title">Core Competencies</h2>
          <p class="portfolio-section-subtitle">
            A comprehensive toolkit spanning modern backend engineering, cloud-native deployments, full-stack development, and agentic workflows.
          </p>
        </div>

        <div class="dcss-grid dcss-grid-cols-2">
          @for (category of categories; track category.title) {
            <article class="dcss-card dcss-card-interactive">
              <div class="dcss-card-header portfolio-card-header-wrap">
                <div class="dcss-flex dcss-items-center">
                  <div class="portfolio-icon-box">
                    <mat-icon>{{ category.icon }}</mat-icon>
                  </div>
                  <div>
                    <h3>{{ category.title }}</h3>
                    <p class="portfolio-skill-subtitle">{{ category.description }}</p>
                  </div>
                </div>
              </div>

              <div class="dcss-card-body">
                <div class="dcss-flex dcss-flex-wrap">
                  @for (skill of category.skills; track skill) {
                    <span class="dcss-badge dcss-badge-neutral dcss-badge-mono">
                      {{ skill }}
                    </span>
                  }
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'Backend & Architecture',
      icon: 'dns',
      description: 'Distributed microservices, domain isolation, event streaming & databases',
      skills: [
        'Java (8–21)',
        'Spring Boot',
        'Hexagonal Architecture',
        'Microservices',
        'RabbitMQ',
        'JPA / Hibernate',
        'PostgreSQL',
        'Oracle Database',
        'MySQL',
        'RESTful APIs',
        'Python'
      ]
    },
    {
      title: 'DevOps, CI/CD & Quality',
      icon: 'cloud_queue',
      description: 'Automated pipelines, container orchestration & strict quality gates',
      skills: [
        'Kubernetes (K8s)',
        'Jenkins (CI/CD)',
        'Rancher',
        'Keel (Auto-deploy)',
        'SonarQube',
        'Docker',
        'JUnit & Mockito',
        'Gradle & Maven',
        'Git & GitHub Actions',
        'Postman & Insomnia'
      ]
    },
    {
      title: 'Frontend & Full-Stack',
      icon: 'devices',
      description: 'Modern reactive web apps, clean component design & performance',
      skills: [
        'Angular (v17–v21)',
        'TypeScript',
        'JavaScript (ESNext)',
        'dcss-ui Design System',
        'Material Design',
        'Responsive UI/UX',
        'Signals & Control Flow',
        'SPA & SSG Architecture'
      ]
    },
    {
      title: 'Agentic Engineering & Automation',
      icon: 'auto_awesome',
      description: 'AI-assisted development, governance & high-ROI process automation',
      skills: [
        'Claude Code (Agentic SE)',
        'Context Engineering',
        'Spec-Driven Dev (SDD)',
        'Model Context Protocol (MCP)',
        'UiPath RPA',
        'Microsoft Power Automate',
        'Power Platform',
        'AppSheet'
      ]
    }
  ];
}
