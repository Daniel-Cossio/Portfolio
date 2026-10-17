import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="py-20 bg-gray-950 text-white px-4">
      <div class="max-w-4xl mx-auto text-center">
        <span class="text-emerald-400 font-mono text-sm font-semibold tracking-wider uppercase">Contact</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold mt-2 font-sans">Let's Connect</h2>
        <p class="text-gray-400 mt-3 mb-10 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
          Interested in discussing distributed software architecture, engineering challenges, or professional opportunities? Feel free to reach out.
        </p>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-14">
          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/daniel-cossio-marulanda/?locale=en-US" target="_blank" rel="noopener noreferrer"
             class="p-6 bg-gray-900/90 rounded-2xl border border-gray-800 hover:border-emerald-500 hover:bg-gray-850 transition-all flex flex-col items-center gap-2 group">
            <div class="w-12 h-12 rounded-xl bg-gray-800 group-hover:bg-emerald-600 transition-colors flex items-center justify-center text-gray-300 group-hover:text-white">
              <mat-icon>work</mat-icon>
            </div>
            <span class="font-bold text-gray-200 mt-1">LinkedIn</span>
            <span class="text-xs text-gray-400 group-hover:text-emerald-400 transition-colors font-mono">daniel-cossio-marulanda</span>
          </a>

          <!-- GitHub -->
          <a href="https://github.com/Daniel-Cossio" target="_blank" rel="noopener noreferrer"
             class="p-6 bg-gray-900/90 rounded-2xl border border-gray-800 hover:border-emerald-500 hover:bg-gray-850 transition-all flex flex-col items-center gap-2 group">
            <div class="w-12 h-12 rounded-xl bg-gray-800 group-hover:bg-emerald-600 transition-colors flex items-center justify-center text-gray-300 group-hover:text-white">
              <mat-icon>code</mat-icon>
            </div>
            <span class="font-bold text-gray-200 mt-1">GitHub</span>
            <span class="text-xs text-gray-400 group-hover:text-emerald-400 transition-colors font-mono">&#64;Daniel-Cossio</span>
          </a>

          <!-- Email Card (Anti-Scraping: Click to Reveal -> Click to Copy/Compose) -->
          <button (click)="handleEmailClick()" type="button"
             class="p-6 bg-gray-900/90 rounded-2xl border border-gray-800 hover:border-emerald-500 hover:bg-gray-850 transition-all flex flex-col items-center gap-2 group cursor-pointer text-center w-full">
            <div class="w-12 h-12 rounded-xl bg-gray-800 group-hover:bg-emerald-600 transition-colors flex items-center justify-center text-gray-300 group-hover:text-white">
              <mat-icon>{{ !revealed() ? 'visibility' : (copied() ? 'check' : 'email') }}</mat-icon>
            </div>
            <span class="font-bold text-gray-200 mt-1">Email</span>

            @if (!revealed()) {
              <span class="text-xs font-mono text-gray-400 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                <span>Click to reveal address</span>
              </span>
            } @else {
              <div class="flex flex-col items-center gap-1">
                <span class="text-xs font-mono text-emerald-400 font-semibold break-all">
                  {{ getEmail() }}
                </span>
                <span class="text-[10px] font-mono text-gray-400 transition-colors">
                  {{ copied() ? '✓ Copied to clipboard!' : '(Click to copy)' }}
                </span>
              </div>
            }
          </button>
        </div>

        <div class="pt-10 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Daniel Felipe Cossio Marulanda. All rights reserved.</p>
          <p class="font-mono text-gray-400">Angular 21 • Tailwind CSS • GitHub Pages SSG</p>
        </div>
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
