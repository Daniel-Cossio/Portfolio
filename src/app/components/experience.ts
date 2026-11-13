import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  badge?: string;
  bullets: string[];
  skills: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience" class="portfolio-section portfolio-section--surface">
      <div class="dcss-container">
        <div class="portfolio-section-header">
          <span class="dcss-badge dcss-badge-primary dcss-badge-pill dcss-badge-mono">Career Pathway</span>
          <h2 class="portfolio-section-title">Professional Experience</h2>
          <p class="portfolio-section-subtitle">
            Delivering business value through resilient system architecture, automated operations, and engineering leadership.
          </p>
        </div>

        <div class="portfolio-timeline">
          @for (item of experiences; track item.role + item.period) {
            <div class="portfolio-timeline-item">
              <span class="portfolio-timeline-node" aria-hidden="true"></span>

              <article class="dcss-card dcss-card-interactive">
                <div class="dcss-card-header portfolio-card-header-wrap">
                  <div class="portfolio-card-header-stack">
                    <h3>{{ item.role }}</h3>
                    <div class="portfolio-meta-row">
                      <mat-icon>business</mat-icon>
                      <span>{{ item.company }}</span>
                      <span>•</span>
                      <span>{{ item.location }}</span>
                    </div>
                  </div>
                  <span class="dcss-badge dcss-badge-primary dcss-badge-pill dcss-badge-mono">
                    {{ item.period }}
                  </span>
                </div>

                <div class="dcss-card-body">
                  <ul class="portfolio-bullet-list">
                    @for (bullet of item.bullets; track bullet) {
                      <li class="portfolio-bullet-item">
                        <span class="portfolio-bullet-marker">▹</span>
                        <span>{{ bullet }}</span>
                      </li>
                    }
                  </ul>
                </div>

                <div class="dcss-card-footer portfolio-card-footer-start">
                  @for (skill of item.skills; track skill) {
                    <span class="dcss-badge dcss-badge-neutral dcss-badge-mono">
                      {{ skill }}
                    </span>
                  }
                </div>
              </article>
            </div>
          }
        </div>

        <!-- Education Card -->
        <div class="portfolio-education-block">
          <div class="portfolio-section-header">
            <span class="dcss-badge dcss-badge-primary dcss-badge-pill dcss-badge-mono">Academic Background</span>
            <h3 class="portfolio-section-title">Education</h3>
          </div>

          <article class="dcss-card dcss-card-interactive portfolio-education-card">
            <div class="dcss-card-header portfolio-card-header-wrap">
              <div class="portfolio-card-header-stack">
                <h4>B.Sc. in Systems Engineering (Ingeniería de Sistemas)</h4>
                <div class="portfolio-meta-row">
                  <mat-icon>school</mat-icon>
                  <span>Universidad del Valle, Colombia</span>
                </div>
              </div>
              <span class="dcss-badge dcss-badge-primary dcss-badge-pill dcss-badge-mono">
                2017 – 2025
              </span>
            </div>
            <div class="dcss-card-body">
              <p>
                <strong>Undergraduate Thesis:</strong> "Development of a support tool for learning soft skills."
                Core coursework in distributed systems, software architecture, relational data modeling, and web engineering.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      period: 'Dec 2023 – Present',
      role: 'Java Software Architect',
      company: 'Ceiba Software',
      location: 'Colombia',
      bullets: [
        'Lead the end-to-end architectural design and full-stack development of distributed enterprise microservices and web platforms using Java (8–21), Spring Boot, and Angular.',
        'Define and enforce Hexagonal Architecture (Ports & Adapters) and modular designs, guaranteeing clean separation of domain logic and long-term maintainability.',
        'Architect asynchronous event-driven workflows using RabbitMQ and optimize relational data persistence across PostgreSQL, MySQL, and Oracle.',
        'Manage CI/CD pipelines and container orchestration with Jenkins, Kubernetes, Rancher, and Keel, enforcing SonarQube quality gates and automated JUnit/Mockito test suites.',
        'Pioneered Agentic Software Engineering practices using Claude Code—implementing Context Engineering, Spec-Driven Development (SDD), and automated multi-agent code reviews with human oversight.',
        'Mentored 5 junior developers from scratch and conducted structured peer code reviews for 10+ engineers across project teams.'
      ],
      skills: ['Java 21', 'Spring Boot', 'Hexagonal Architecture', 'RabbitMQ', 'Angular', 'Kubernetes', 'Jenkins', 'SonarQube', 'Claude Code / SDD']
    },
    {
      period: 'Jan 2022 – Nov 2023',
      role: 'RPA Developer Architect',
      company: 'Ceiba Software',
      location: 'Colombia',
      bullets: [
        'Analyzed complex enterprise business workflows alongside multidisciplinary stakeholders to design resilient automation architectures with high ROI.',
        'Designed, built, and deployed ~20 end-to-end production automations for an enterprise client using Microsoft Power Automate and UiPath, reducing manual workload by 95%.',
        'Engineered seamless integrations between RPA bots, REST APIs, and legacy core systems to ensure zero-downtime continuity.',
        'Developed custom low-code internal enterprise applications using Microsoft Power Platform and AppSheet.'
      ],
      skills: ['UiPath', 'Power Automate', 'Power Platform', 'REST APIs', 'AppSheet', 'Process Optimization']
    },
    {
      period: 'Jul 2021 – Jan 2022',
      role: 'Java Developer Intern',
      company: 'Ceiba Software',
      location: 'Colombia',
      bullets: [
        'Contributed to the technical design and implementation of modular web architectures using Java, Spring Boot, and Angular.',
        'Developed core backend and frontend features for enterprise inventory management systems and external REST API integrations validated with Postman and Insomnia.'
      ],
      skills: ['Java', 'Spring Boot', 'Angular', 'REST APIs', 'Postman']
    }
  ];
}
