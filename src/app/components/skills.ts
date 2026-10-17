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
    <section id="skills" class="py-20 px-4 max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-emerald-600 font-mono text-sm font-semibold tracking-wider uppercase">Technical Mastery</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 font-sans">Core Competencies</h2>
        <p class="text-gray-600 max-w-2xl mx-auto mt-3">
          A comprehensive toolkit spanning modern backend engineering, cloud-native deployments, full-stack development, and agentic workflows.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        @for (category of categories; track category.title) {
          <div class="bg-white p-7 rounded-2xl border border-gray-100 shadow-xs hover:border-emerald-200 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <mat-icon>{{ category.icon }}</mat-icon>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">{{ category.title }}</h3>
                  <p class="text-xs text-gray-500">{{ category.description }}</p>
                </div>
              </div>

              <div class="flex flex-wrap gap-2 mt-4">
                @for (skill of category.skills; track skill) {
                  <span class="px-3 py-1.5 bg-gray-50 text-gray-800 text-xs sm:text-sm font-mono font-medium rounded-lg border border-gray-100 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors">
                    {{ skill }}
                  </span>
                }
              </div>
            </div>
          </div>
        }
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
        'Tailwind CSS',
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
