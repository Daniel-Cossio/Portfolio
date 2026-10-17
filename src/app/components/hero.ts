import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="pt-16 pb-20 px-4 max-w-5xl mx-auto text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium mb-8">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Based in Colombia • Open to International Relocation & Remote</span>
      </div>

      <h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
        Hi, I'm <span class="text-emerald-600">Daniel Cossio</span>
      </h1>

      <p class="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto font-mono font-medium mb-6">
        Java Software Architect & Systems Engineer
      </p>

      <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
        Over 4 years of professional experience architecting scalable distributed microservices, 
        event-driven systems with Java (8–21) & Spring Boot, container orchestration with Kubernetes, 
        and cutting-edge Agentic Software Engineering practices.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4 mb-16">
        <a href="#projects" 
           class="px-6 py-3.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all shadow-sm hover:shadow flex items-center gap-2">
          <span>Explore Projects</span>
          <mat-icon class="text-sm w-4 h-4">arrow_downward</mat-icon>
        </a>
        <a href="#experience" 
           class="px-6 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2">
          <span>Experience</span>
          <mat-icon class="text-sm w-4 h-4">work_outline</mat-icon>
        </a>
        <a href="#cv" 
           class="px-6 py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all shadow-sm flex items-center gap-2">
          <mat-icon class="text-sm w-4 h-4">download</mat-icon>
          <span>Resume</span>
        </a>
      </div>

      <!-- Quick Metrics Highlights -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100 max-w-3xl mx-auto">
        <div class="p-4 rounded-xl bg-gray-50/70">
          <div class="text-3xl font-extrabold text-gray-900 font-mono">4+ Years</div>
          <div class="text-xs sm:text-sm text-gray-600 font-medium mt-1">Enterprise Architecture & Full-Stack</div>
        </div>
        <div class="p-4 rounded-xl bg-gray-50/70">
          <div class="text-3xl font-extrabold text-emerald-600 font-mono">95%</div>
          <div class="text-xs sm:text-sm text-gray-600 font-medium mt-1">Manual Workload Reduction via RPA</div>
        </div>
        <div class="p-4 rounded-xl bg-gray-50/70">
          <div class="text-3xl font-extrabold text-gray-900 font-mono">10+ Peers</div>
          <div class="text-xs sm:text-sm text-gray-600 font-medium mt-1">Reviewed & Junior Devs Mentored</div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}
