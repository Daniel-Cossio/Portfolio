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
    <section id="skills" class="py-20 px-4 max-w-6xl mx-auto transition-colors duration-200">
      <div class="text-center mb-16">
        <span class="text-emerald-600 dark:text-emerald-400 font-mono text-sm font-semibold tracking-wider uppercase">Technical Mastery</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 font-sans">Core Competencies</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-3">
          A comprehensive toolkit spanning modern backend engineering, cloud-native deployments, full-stack development, and agentic workflows.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        @for (category of categories; track category.title) {
          <div class="bg-white dark:bg-gray-900 p-7 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xs hover:border-emerald-200 dark:hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <mat-icon>{{ category.icon }}</mat-icon>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ category.title }}</h3>
                  <p class="text-xs text-gray-500 dark:text-gray-400">{{ category.description }}</p>
                </div>
              </div>

              <div class="flex flex-wrap gap-2 mt-4">
                @for (skill of category.skills; track skill) {
                  <span class="px-3 py-1.5 bg-gray-50 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-mono font-medium rounded-lg border border-gray-100 dark:border-gray-700/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-700 dark:hover:text-emerald-300 hover:border-emerald-200 dark:hover:border-emerald-700/60 transition-colors">
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
