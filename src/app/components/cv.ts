import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="cv" class="portfolio-section">
      <div class="dcss-container">
        <article class="dcss-card portfolio-cv-card">
          <div class="dcss-card-body">
            <div class="portfolio-section-header" style="margin-bottom: var(--dcss-space-4);">
              <span class="dcss-badge dcss-badge-primary dcss-badge-pill dcss-badge-mono">Credentials</span>
              <h2 class="portfolio-section-title">Curriculum Vitae / Resume</h2>
              <p class="portfolio-section-subtitle">
                Download my updated resume for an exhaustive overview of enterprise architectural experience, technology stack, and career milestones.
              </p>
            </div>

            <div class="portfolio-cv-actions">
              <a
                href="assets/cv-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Daniel_Cossio_Resume_EN.pdf"
                class="dcss-btn dcss-btn-primary dcss-btn-lg">
                <mat-icon>download</mat-icon>
                <span>Download Resume</span>
                <kbd class="dcss-kbd dcss-kbd-sm">EN</kbd>
              </a>
              <a
                href="assets/cv-es.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Daniel_Cossio_CV_ES.pdf"
                class="dcss-btn dcss-btn-secondary dcss-btn-lg">
                <mat-icon>download</mat-icon>
                <span>Descargar CV</span>
                <kbd class="dcss-kbd dcss-kbd-sm">ES</kbd>
              </a>
            </div>

            <p class="portfolio-cv-meta">
              PDF format • Compiled with LuaLaTeX &amp; moderncv
            </p>
          </div>
        </article>
      </div>
    </section>
  `
})
export class CvComponent {}
