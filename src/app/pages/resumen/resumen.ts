import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen',
  standalone: true,
  template: `
    <!-- Hero Section -->
    <section class="relative bg-teal-800 text-white overflow-hidden rounded-2xl mb-12 shadow-xl border border-teal-700">
      <div class="absolute inset-0 opacity-20">
        <div class="w-full h-full bg-gradient-to-r from-teal-900 to-teal-700"></div>
      </div>
      <div class="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12">
        <div class="lg:w-1/2 flex flex-col gap-6">
          <span class="inline-block px-4 py-1.5 bg-teal-900/50 text-teal-100 font-bold tracking-wider text-xs uppercase rounded-full w-max border border-teal-600/50 backdrop-blur-sm shadow-sm">
            Proyecto Académico - TI
          </span>
          <h1 class="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Transformación Digital <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-rose-400">Florería Adonai</span>
          </h1>
          <p class="text-lg text-teal-50 leading-relaxed opacity-90 max-w-xl font-medium">
            Un enfoque sistemático basado en PMBOK (6.ª Edición) para modernizar la gestión operativa y comercial de una microempresa floral mediante herramientas digitales accesibles.
          </p>
        </div>
        <div class="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform hover:-translate-y-2 transition-transform duration-500 w-full max-w-lg aspect-[4/3]">
            <img src="/floreria.jpg" alt="Interior de la florería" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Resumen -->
    <div class="mb-8 flex items-center gap-4">
      <div class="p-3 bg-rose-100 rounded-xl">
        <svg class="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <h2 class="text-4xl font-extrabold text-teal-950 tracking-tight">Resumen Ejecutivo</h2>
    </div>
    
    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-16 overflow-hidden" open>
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-teal-50/50 to-white hover:bg-teal-50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3">
          <svg class="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Contexto y Objetivos del Proyecto
        </div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed space-y-5 text-lg">
        <p>El presente informe académico desarrolla el proceso de <strong>Identificación y Análisis de Interesados (Stakeholders)</strong> para un proyecto de transformación digital aplicado a una florería local categorizada como microempresa. La elaboración sigue rigurosamente el marco metodológico establecido por el PMBOK (Project Management Body of Knowledge), específicamente el proceso 13.1 – Identificar a los Interesados, correspondiente al área de conocimiento de Gestión de los Interesados del Proyecto.</p>
        <p>La florería objeto de estudio opera de manera artesanal y manual, sin ningún sistema de información digital. Su propietaria gestiona todas las operaciones con apoyo parcial de una vendedora, y los registros se realizan en cuadernos físicos. La problemática central incluye la ausencia de control de inventario, falta de base de datos de clientes, escaso alcance de mercado y alta estacionalidad de ventas.</p>
        <div class="bg-rose-50/50 border-l-4 border-rose-500 p-6 rounded-r-xl mt-6 text-rose-900 shadow-sm">
          <strong class="text-rose-700 block mb-2 text-xl">🎯 Objetivo Principal:</strong> 
          Optimizar la gestión operativa y comercial del negocio mediante la implementación de herramientas digitales accesibles, sin requerir desarrollo de software complejo, priorizando soluciones como sistemas de gestión de inventario basados en la nube, estrategias de marketing digital y plataformas de registro de clientes.
        </div>
      </div>
    </details>

    <!-- Galería y Recursos -->
    <div class="mb-8 flex items-center gap-4">
      <div class="p-3 bg-teal-100 rounded-xl">
        <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      </div>
      <h2 class="text-4xl font-extrabold text-teal-950 tracking-tight">Galería de Evidencias</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <!-- Documento -->
      <a href="#" class="group relative flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-slate-200 hover:border-rose-400 hover:shadow-2xl transition-all aspect-square duration-300">
        <div class="w-24 h-24 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-100 group-hover:rotate-6 transition-all duration-300">
          <svg class="w-12 h-12 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
        </div>
        <span class="text-xl font-extrabold text-slate-800 text-center leading-tight mb-2">PROYECTO_<br/>FLORERIA.docx</span>
        <span class="text-sm text-rose-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 flex items-center gap-1">
          Descargar Documento <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        </span>
      </a>

      <!-- Foto Real -->
      <div class="group relative rounded-3xl overflow-hidden bg-slate-200 aspect-square shadow-sm border border-slate-200">
        <img src="/floreria.jpg" alt="Interior Florería" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
          <span class="text-white font-black text-2xl drop-shadow-lg tracking-tight mb-1">Vista del Local</span>
          <span class="text-teal-200 text-sm font-semibold flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Evidencia Inicial
          </span>
        </div>
      </div>

      <!-- Add New -->
      <div class="group relative rounded-3xl overflow-hidden bg-slate-50 aspect-square border-2 border-dashed border-slate-300 flex items-center justify-center hover:border-teal-400 hover:bg-teal-50/30 transition-all cursor-pointer duration-300">
        <div class="text-center p-8">
          <div class="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-100 group-hover:scale-110 transition-all duration-300 shadow-sm">
            <svg class="w-10 h-10 text-slate-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          </div>
          <span class="text-lg font-bold text-slate-600 group-hover:text-teal-700 transition-colors">Añadir Nueva<br/>Evidencia</span>
        </div>
      </div>
    </div>
  `
})
export class ResumenComponent {}
