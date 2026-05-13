import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="bg-white shadow-sm border-b border-teal-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <a routerLink="/resumen" class="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            <span class="font-bold text-xl text-teal-800 tracking-tight">Florería Adonai</span>
          </a>

          <!-- Botón menú móvil -->
          <button (click)="toggleMobileMenu()" class="lg:hidden p-2 text-teal-800 hover:text-teal-600 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Menú Desktop -->
          <div class="hidden lg:flex h-full items-center gap-6 text-sm font-medium text-slate-600">
            <!-- FASE 1 -->
            <div class="relative group h-full flex items-center">
              <button class="h-full px-3 hover:text-teal-600 transition-colors flex items-center gap-1 font-bold text-teal-800 cursor-pointer">
                Fase 1 — Diagnóstico
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="absolute left-0 top-full hidden group-hover:block w-64 bg-white border border-teal-100 shadow-lg rounded-b-xl overflow-hidden">
                <a routerLink="/analisis" routerLinkActive="text-teal-700 border-b-2 border-teal-600 bg-teal-50" class="block px-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Análisis de involucrados</a>
                <a routerLink="/analisis-problemas" routerLinkActive="text-teal-700 border-b-2 border-teal-600 bg-teal-50" class="block px-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Análisis de problemas</a>
                <a routerLink="/analisis-objetivos" routerLinkActive="text-teal-700 border-b-2 border-teal-600 bg-teal-50" class="block px-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Análisis de objetivos</a>
              </div>
            </div>

            <!-- FASE 2 -->
            <div class="relative group h-full flex items-center">
              <button class="h-full px-3 hover:text-teal-600 transition-colors flex items-center gap-1 font-bold text-teal-800 cursor-pointer">
                Fase 2 — Proyecto
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="absolute left-0 top-full hidden group-hover:block w-64 bg-white border border-teal-100 shadow-lg rounded-b-xl overflow-hidden">
                <a routerLink="/analisis-alternativas" routerLinkActive="text-teal-700 border-b-2 border-teal-600 bg-teal-50" class="block px-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Análisis de alternativas</a>
              </div>
            </div>

            <!-- FASE 3 -->
            <div class="relative group h-full flex items-center">
              <button class="h-full px-3 hover:text-teal-600 transition-colors flex items-center gap-1 font-bold text-teal-800 cursor-pointer">
                Fase 3 — Resumen
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="absolute right-0 top-full hidden group-hover:block w-64 bg-white border border-teal-100 shadow-lg rounded-b-xl overflow-hidden">
                <a routerLink="/matriz-marco-logico" routerLinkActive="text-teal-700 border-b-2 border-teal-600 bg-teal-50" class="block px-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Matriz de Marco Lógico</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Menú Móvil -->
      <div *ngIf="isMobileMenuOpen" class="lg:hidden border-t border-teal-100 bg-white">
        <div class="px-4 pt-2 pb-4 space-y-1 max-h-[80vh] overflow-y-auto">
          <div class="font-bold text-teal-800 px-3 py-2 uppercase text-xs tracking-wider">Fase 1 — Diagnóstico</div>
          <a (click)="closeMobileMenu()" routerLink="/analisis" routerLinkActive="text-teal-700 bg-teal-50" class="block pl-6 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">Análisis de involucrados</a>
          <a (click)="closeMobileMenu()" routerLink="/analisis-problemas" routerLinkActive="text-teal-700 bg-teal-50" class="block pl-6 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">Análisis de problemas</a>
          <a (click)="closeMobileMenu()" routerLink="/analisis-objetivos" routerLinkActive="text-teal-700 bg-teal-50" class="block pl-6 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">Análisis de objetivos</a>

          <div class="font-bold text-teal-800 px-3 py-2 mt-2 uppercase text-xs tracking-wider border-t border-slate-100 pt-4">Fase 2 — Proyecto</div>
          <a (click)="closeMobileMenu()" routerLink="/analisis-alternativas" routerLinkActive="text-teal-700 bg-teal-50" class="block pl-6 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">Análisis de alternativas</a>

          <div class="font-bold text-teal-800 px-3 py-2 mt-2 uppercase text-xs tracking-wider border-t border-slate-100 pt-4">Fase 3 — Resumen</div>
          <a (click)="closeMobileMenu()" routerLink="/matriz-marco-logico" routerLinkActive="text-teal-700 bg-teal-50" class="block pl-6 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">Matriz de Marco Lógico</a>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
