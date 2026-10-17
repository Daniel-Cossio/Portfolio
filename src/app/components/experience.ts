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
    <section id="experience" class="py-20 px-4 bg-gray-50/60 border-y border-gray-100">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-emerald-600 font-mono text-sm font-semibold tracking-wider uppercase">Career Pathway</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 font-sans">Professional Experience</h2>
          <p class="text-gray-600 max-w-2xl mx-auto mt-3">
            Delivering business value through resilient system architecture, automated operations, and engineering leadership.
          </p>
        </div>

        <div class="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-8 space-y-12">
          @for (item of experiences; track item.role + item.period) {
            <div class="relative pl-6 sm:pl-10 group">
              <!-- Timeline node indicator -->
              <span class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-emerald-600 group-hover:scale-125 transition-transform"></span>

              <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-xs border border-gray-100 hover:shadow-md transition-shadow">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 mb-2">
                      {{ item.period }}
                    </span>
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900">{{ item.role }}</h3>
                    <div class="text-gray-600 font-medium text-sm flex items-center gap-1.5 mt-0.5">
                      <mat-icon class="text-base w-4 h-4 text-gray-400">business</mat-icon>
                      <span>{{ item.company }}</span>
                      <span>•</span>
                      <span class="text-gray-500">{{ item.location }}</span>
                    </div>
                  </div>
                </div>

                <ul class="space-y-2.5 mb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                  @for (bullet of item.bullets; track bullet) {
                    <li class="flex items-start gap-2">
                      <span class="text-emerald-500 mt-1 font-bold text-xs">▹</span>
                      <span>{{ bullet }}</span>
                    </li>
                  }
                </ul>

                <div class="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                  @for (skill of item.skills; track skill) {
                    <span class="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-mono font-medium rounded-md">
                      {{ skill }}
                    </span>
                  }
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Education Card -->
        <div class="mt-16 pt-12 border-t border-gray-200">
          <div class="text-center mb-8">
            <span class="text-emerald-600 font-mono text-sm font-semibold tracking-wider uppercase">Academic Background</span>
            <h3 class="text-2xl font-bold text-gray-900 mt-1">Education</h3>
          </div>

          <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-xs border border-gray-100 max-w-3xl mx-auto">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 mb-1">
                  2017 – 2025
                </span>
                <h4 class="text-lg sm:text-xl font-bold text-gray-900">B.Sc. in Systems Engineering (Ingeniería de Sistemas)</h4>
                <p class="text-emerald-700 font-medium text-sm">Universidad del Valle, Colombia</p>
              </div>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mt-2">
              <strong class="text-gray-900">Undergraduate Thesis:</strong> "Development of a support tool for learning soft skills." Core coursework in distributed systems, software architecture, relational data modeling, and web engineering.
            </p>
          </div>
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
