import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="portfolio-hero">
      <div class="dcss-container">
        <span class="dcss-badge dcss-badge-neutral dcss-badge-pill">
          <span class="dcss-dot dcss-dot-pulse"></span>
          <span>Based in Colombia • Open to International Relocation &amp; Remote</span>
        </span>

        <h1 class="portfolio-hero-title">
          Hi, I'm <span class="portfolio-hero-accent">Daniel Cossio</span>
        </h1>

        <p class="portfolio-hero-role">
          Java Software Architect &amp; Systems Engineer
        </p>

        <p class="portfolio-hero-bio">
          Over 4 years of professional experience architecting scalable distributed microservices,
          event-driven systems with Java (8–21) &amp; Spring Boot, container orchestration with Kubernetes,
          and cutting-edge Agentic Software Engineering practices.
        </p>

        <div class="portfolio-hero-actions">
          <a href="#projects" class="dcss-btn dcss-btn-primary dcss-btn-lg">
            <span>Explore Projects</span>
            <kbd class="dcss-kbd dcss-kbd-sm">↵</kbd>
          </a>
          <a href="#experience" class="dcss-btn dcss-btn-secondary dcss-btn-lg">
            <mat-icon>work_outline</mat-icon>
            <span>Experience</span>
          </a>
          <a href="#cv" class="dcss-btn dcss-btn-outline dcss-btn-lg">
            <mat-icon>download</mat-icon>
            <span>Resume</span>
          </a>
        </div>

        <!-- Quick Metrics Highlights -->
        <div class="dcss-grid dcss-grid-cols-3 portfolio-metrics-grid">
          <div class="dcss-card">
            <div class="dcss-card-body">
              <div class="portfolio-metric-value">4+ Years</div>
              <div class="portfolio-metric-label">Enterprise Architecture &amp; Full-Stack</div>
            </div>
          </div>
          <div class="dcss-card">
            <div class="dcss-card-body">
              <div class="portfolio-metric-value">95%</div>
              <div class="portfolio-metric-label">Manual Workload Reduction via RPA</div>
            </div>
          </div>
          <div class="dcss-card">
            <div class="dcss-card-body">
              <div class="portfolio-metric-value">10+ Peers</div>
              <div class="portfolio-metric-label">Reviewed &amp; Junior Devs Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}
