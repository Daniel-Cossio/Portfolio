import {ChangeDetectionStrategy, Component} from '@angular/core';
import { HeroComponent } from './components/hero';
import { CvComponent } from './components/cv';
import { ProjectsComponent } from './components/projects';
import { ContactComponent } from './components/contact';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [HeroComponent, CvComponent, ProjectsComponent, ContactComponent],
  template: `
    <main class="min-h-screen bg-white font-sans text-gray-900 selection:bg-emerald-200">
      <app-hero />
      <app-cv />
      <app-projects />
      <app-contact />
    </main>
  `,
})
export class App {}
