import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="portfolio-section portfolio-section--surface">
      <div class="dcss-container">
        <div class="portfolio-section-header">
          <span class="dcss-badge dcss-badge-primary dcss-badge-pill dcss-badge-mono">Contact</span>
          <h2 class="portfolio-section-title">Let's Connect</h2>
          <p class="portfolio-section-subtitle">
            Interested in discussing distributed software architecture, engineering challenges, or professional opportunities? Feel free to reach out.
          </p>
        </div>

        <div class="dcss-grid dcss-grid-cols-3 portfolio-contact-grid">
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/daniel-cossio-marulanda/?locale=en-US"
            target="_blank"
            rel="noopener noreferrer"
            class="dcss-card dcss-card-interactive portfolio-contact-card">
            <div class="portfolio-icon-box">
              <mat-icon>work</mat-icon>
            </div>
            <span class="portfolio-contact-title">LinkedIn</span>
            <span class="portfolio-contact-handle">daniel-cossio-marulanda</span>
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/Daniel-Cossio"
            target="_blank"
            rel="noopener noreferrer"
            class="dcss-card dcss-card-interactive portfolio-contact-card">
            <div class="portfolio-icon-box">
              <mat-icon>code</mat-icon>
            </div>
            <span class="portfolio-contact-title">GitHub</span>
            <span class="portfolio-contact-handle">&#64;Daniel-Cossio</span>
          </a>

          <!-- Email Card (Anti-Scraping: Click to Reveal -> Click to Copy/Compose) -->
          <button
            (click)="handleEmailClick()"
            type="button"
            class="dcss-card dcss-card-interactive portfolio-contact-card">
            <div class="portfolio-icon-box">
              <mat-icon>{{ !revealed() ? 'visibility' : (copied() ? 'check' : 'email') }}</mat-icon>
            </div>
            <span class="portfolio-contact-title">Email</span>

            @if (!revealed()) {
              <span class="portfolio-contact-handle">Click to reveal address</span>
            } @else {
              <span class="dcss-badge dcss-badge-primary dcss-badge-mono">
                {{ getEmail() }}
              </span>
              <span class="portfolio-contact-hint">
                {{ copied() ? '✓ Copied to clipboard!' : '(Click to copy)' }}
              </span>
            }
          </button>
        </div>

        <footer class="portfolio-footer">
          <p>© 2026 Daniel Felipe Cossio Marulanda. All rights reserved.</p>
          <p class="portfolio-footer-meta">Angular 21 • dcss-ui (Monochrome) • GitHub Pages SSG</p>
        </footer>
      </div>
    </section>
  `
})
export class ContactComponent {
  revealed = signal(false);
  copied = signal(false);

  private readonly user = 'danielcossio195+dev';
  private readonly domain = 'gmail.com';

  getEmail(): string {
    return `${this.user}@${this.domain}`;
  }

  handleEmailClick(): void {
    if (!this.revealed()) {
      this.revealed.set(true);
      return;
    }

    const email = this.getEmail();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 3000);
      });
    } else if (typeof window !== 'undefined') {
      window.location.href = `mailto:${email}`;
    }
  }
}
