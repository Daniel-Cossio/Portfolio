import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from './components/navbar';
import { HeroComponent } from './components/hero';
import { ExperienceComponent } from './components/experience';
import { SkillsComponent } from './components/skills';
import { ProjectsComponent } from './components/projects';
import { CvComponent } from './components/cv';
import { ContactComponent } from './components/contact';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    CvComponent,
    ContactComponent
  ],
  template: `
    <div class="min-h-screen bg-white font-sans text-gray-900 selection:bg-emerald-200">
      <app-navbar />
      <main>
        <app-hero />
        <app-experience />
        <app-skills />
        <app-projects />
        <app-cv />
        <app-contact />
      </main>
    </div>
  `,
})
export class App {}
