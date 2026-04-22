import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="bg-white shadow-sm border-b border-teal-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center gap-2">
            <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            <span class="font-bold text-xl text-teal-800 tracking-tight">Florería Adonai</span>
          </div>
          <div class="hidden lg:flex gap-2 text-sm font-medium text-slate-600 overflow-x-auto">
            <a routerLink="/resumen" routerLinkActive="text-teal-700 border-b-2 border-teal-600 bg-teal-50" class="px-3 py-5 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Resumen</a>
            <a routerLink="/entradas" routerLinkActive="text-teal-700 border-b-2 border-teal-600 bg-teal-50" class="px-3 py-5 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Entradas</a>
            <a routerLink="/herramientas" routerLinkActive="text-teal-700 border-b-2 border-teal-600 bg-teal-50" class="px-3 py-5 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Herramientas</a>
            <a routerLink="/analisis" routerLinkActive="text-teal-700 border-b-2 border-teal-600 bg-teal-50" class="px-3 py-5 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Análisis</a>
            <a routerLink="/representacion" routerLinkActive="text-teal-700 border-b-2 border-teal-600 bg-teal-50" class="px-3 py-5 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Representación</a>
            <a routerLink="/salidas" routerLinkActive="text-teal-700 border-b-2 border-teal-600 bg-teal-50" class="px-3 py-5 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Salidas</a>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
