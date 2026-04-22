import { Component } from '@angular/core';

@Component({
  selector: 'app-entradas',
  standalone: true,
  template: `
    <div class="mb-10 flex items-center gap-4">
      <div class="p-4 bg-teal-100 rounded-2xl">
        <svg class="w-10 h-10 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
      </div>
      <div>
        <h1 class="text-4xl font-black text-teal-950 tracking-tight">Entradas del Proceso (PMBOK)</h1>
        <p class="text-slate-500 mt-1 text-lg font-medium">Documentos y factores ambientales de entrada para el proyecto.</p>
      </div>
    </div>
    
    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden" open>
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">1.1</span> Stakeholders Identificados en el Acta</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed overflow-x-auto">
        <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <thead class="bg-teal-900 text-teal-50 text-sm uppercase tracking-wider">
            <tr><th class="p-4 font-bold">Interesado</th><th class="p-4 font-bold">Rol en el Proyecto</th><th class="p-4 font-bold">Responsabilidad Principal</th></tr>
          </thead>
          <tbody class="text-sm">
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-slate-800">Propietaria (Karina)</td><td class="p-4 text-teal-700 font-medium">Patrocinadora y usuaria final</td><td class="p-4">Aprobar decisiones, financiar el proyecto, adoptar los nuevos sistemas.</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-slate-800">Vendedora (Maria)</td><td class="p-4 text-teal-700 font-medium">Usuaria operativa</td><td class="p-4">Usar el sistema de inventario y registro de ventas diariamente</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-slate-800">Estudiante</td><td class="p-4 text-teal-700 font-medium">Director del Proyecto</td><td class="p-4">Planificar, ejecutar y supervisar la implementación tecnológica</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-slate-800">Clientes habituales</td><td class="p-4 text-teal-700 font-medium">Beneficiarios indirectos</td><td class="p-4">Recibir mejoras en el servicio, catálogo digital y comunicación</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-slate-800">Proveedor de flores</td><td class="p-4 text-teal-700 font-medium">Interesado externo</td><td class="p-4">Adaptarse a los nuevos procesos de pedidos y abastecimiento</td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">1.2</span> Documentos de Negocio</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed">
        <h4 class="font-black text-teal-900 mb-4 flex items-center gap-2"><div class="w-2 h-6 bg-rose-400 rounded-full"></div> 1.2.1 Caso de Negocio (Business Case)</h4>
        <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6 shadow-sm">
          <p class="mb-4 text-lg"><strong><span class="text-rose-600">PROBLEMA CENTRAL:</span></strong> La florería opera con procesos completamente manuales que generan ineficiencias significativas, el registro de ventas en cuadernos impide un análisis histórico de datos, la ausencia de control de inventario provoca desabastecimiento o desperdicio de flores perecederas, y la falta de presencia digital limita el alcance a nuevos segmentos de mercado.</p>
          <p class="text-lg"><strong><span class="text-teal-700">NECESIDAD DEL NEGOCIO:</span></strong> La florería requiere mejorar su capacidad operativa y comercial debido a limitaciones en el control de inventario, gestión de clientes y alcance de mercado, lo que afecta directamente su rentabilidad y crecimiento.</p>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <thead class="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider">
              <tr><th class="p-4 border-b">Problema Identificado</th><th class="p-4 border-b">Causa</th><th class="p-4 border-b">Impacto Actual</th><th class="p-4 border-b">Beneficio Esperado</th></tr>
            </thead>
            <tbody class="text-sm">
              <tr class="hover:bg-slate-50"><td class="p-4 border-b font-bold text-slate-800">Falta de control de inventario</td><td class="p-4 border-b">Registro manual</td><td class="p-4 border-b text-slate-500">Compras desorganizadas, merma de flores</td><td class="p-4 border-b font-bold text-emerald-600">Reducción del desperdicio en 40%</td></tr>
              <tr class="hover:bg-slate-50"><td class="p-4 border-b font-bold text-slate-800">Sin base de datos de clientes</td><td class="p-4 border-b">No uso de CRM</td><td class="p-4 border-b text-slate-500">Incapacidad de fidelización y seguimiento</td><td class="p-4 border-b font-bold text-emerald-600">CRM básico con 100+ clientes en 6 meses</td></tr>
              <tr class="hover:bg-slate-50"><td class="p-4 border-b font-bold text-slate-800">Bajo alcance de mercado</td><td class="p-4 border-b">No hay redes sociales</td><td class="p-4 border-b text-slate-500">Ventas limitadas al radio local físico</td><td class="p-4 border-b font-bold text-emerald-600">Incremento de 30% en ventas online</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </details>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">1.3</span> Documentos del Proyecto</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed text-lg">
        <h4 class="font-black text-teal-900 mb-4 flex items-center gap-2"><div class="w-2 h-6 bg-rose-400 rounded-full"></div> 1.3.1 Requisitos Preliminares</h4>
        <ul class="list-none space-y-3 pl-2">
          <li class="flex items-start gap-3"><svg class="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span><strong>REQ-01:</strong> Sistema de registro de inventario digital (stock de flores, peluches, globos, chocolates).</span></li>
          <li class="flex items-start gap-3"><svg class="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span><strong>REQ-02:</strong> Base de datos de clientes con nombre, teléfono e historial de compras.</span></li>
          <li class="flex items-start gap-3"><svg class="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span><strong>REQ-03:</strong> Catálogo digital de productos disponible en redes sociales.</span></li>
          <li class="flex items-start gap-3"><svg class="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span><strong>REQ-04:</strong> Sistema de registro de ventas diarias con generación de reportes semanales.</span></li>
        </ul>
      </div>
    </details>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">1.4</span> Acuerdos</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed overflow-x-auto">
        <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <thead class="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider">
            <tr><th class="p-4 border-b">Tipo de Acuerdo</th><th class="p-4 border-b">Partes Involucradas</th><th class="p-4 border-b">Contenido Principal</th></tr>
          </thead>
          <tbody class="text-sm">
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Acuerdo de colaboración verbal</td><td class="p-4 text-slate-600 font-medium">Propietaria – Analista TI</td><td class="p-4 text-slate-500">Acceso al local para observación y levantamiento de información</td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Acuerdo de confidencialidad</td><td class="p-4 text-slate-600 font-medium">Propietaria – Analista TI</td><td class="p-4 text-slate-500">Los datos del negocio serán usados solo con fines académicos</td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Compromiso de disponibilidad</td><td class="p-4 text-slate-600 font-medium">Vendedora – Dir. Proyecto</td><td class="p-4 text-slate-500">Participación en al menos 2 sesiones de capacitación por mes</td></tr>
            <tr class="hover:bg-slate-50"><td class="p-4 font-bold text-slate-800">Acuerdo de uso de herramientas</td><td class="p-4 text-slate-600 font-medium">Propietaria – Proveedor cloud</td><td class="p-4 text-slate-500">Uso de cuentas gratuitas o de bajo costo (Google, Canva, Meta)</td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">1.5</span> Factores Ambientales de la Empresa (EEF)</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed overflow-x-auto">
        <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <thead class="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider">
            <tr><th class="p-4 border-b">Tipo</th><th class="p-4 border-b">Factor</th><th class="p-4 border-b text-center">Naturaleza</th><th class="p-4 border-b">Impacto en el Proyecto</th></tr>
          </thead>
          <tbody class="text-sm">
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Interno</td><td class="p-4 text-slate-600 font-medium">Nivel básico de alfabetización digital de la propietaria</td><td class="p-4 text-center"><span class="text-rose-600 font-bold bg-rose-100 px-3 py-1 rounded-full text-xs">Restricción</span></td><td class="p-4 text-slate-500">Requiere capacitación extensiva; herramientas deben ser intuitivas</td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Interno</td><td class="p-4 text-slate-600 font-medium">Disponibilidad parcial de la vendedora</td><td class="p-4 text-center"><span class="text-rose-600 font-bold bg-rose-100 px-3 py-1 rounded-full text-xs">Restricción</span></td><td class="p-4 text-slate-500">El sistema debe ser fácil de retomar sin continuidad</td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Externo</td><td class="p-4 text-slate-600 font-medium">Alta penetración de smartphones en el Perú (>85%)</td><td class="p-4 text-center"><span class="text-emerald-600 font-bold bg-emerald-100 px-3 py-1 rounded-full text-xs">Oportunidad</span></td><td class="p-4 text-slate-500">Facilita uso de apps móviles para gestión e Instagram</td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Externo</td><td class="p-4 text-slate-600 font-medium">Crecimiento del comercio electronico en Peru</td><td class="p-4 text-center"><span class="text-emerald-600 font-bold bg-emerald-100 px-3 py-1 rounded-full text-xs">Oportunidad</span></td><td class="p-4 text-slate-500">Mercado receptivo a compras por WhatsApp e Instagram</td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Externo</td><td class="p-4 text-slate-600 font-medium">Competencia de florerías con presencia digital</td><td class="p-4 text-center"><span class="text-rose-600 font-bold bg-rose-100 px-3 py-1 rounded-full text-xs">Amenaza</span></td><td class="p-4 text-slate-500">Urgencia de digitalización para no perder cuota de mercado</td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">1.6</span> Activos de los Procesos de la Organización (OPA)</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed text-lg">
        <ul class="list-disc pl-6 space-y-3 marker:text-teal-500">
          <li><strong>Registro manual de ventas en cuaderno:</strong> constituye el único historial de transacciones disponible, aunque incompleto e inconsistente.</li>
          <li><strong>Conocimiento tácito de la propietaria:</strong> experiencia de varios años en el negocio floral, incluyendo conocimiento de temporadas, proveedores y preferencias.</li>
          <li><strong>Listado informal de clientes frecuentes:</strong> nombres y teléfonos guardados en el celular personal de la propietaria vía contactos de WhatsApp.</li>
          <li><strong>Relaciones establecidas con proveedores:</strong> contratos verbales y acuerdos de crédito con proveedores de flores del mercado mayorista local.</li>
          <li><strong>Experiencia en fechas festivas:</strong> conocimiento empírico de los picos de demanda en fechas como San Valentín, Día de la Madre, Navidad y Año Nuevo.</li>
        </ul>
      </div>
    </details>
  `
})
export class EntradasComponent {}
