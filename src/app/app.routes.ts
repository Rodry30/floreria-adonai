import { Routes } from '@angular/router';
import { ResumenComponent } from './pages/resumen/resumen';
import { EntradasComponent } from './pages/entradas/entradas';
import { HerramientasComponent } from './pages/herramientas/herramientas';
import { AnalisisComponent } from './pages/analisis/analisis';
import { RepresentacionComponent } from './pages/representacion/representacion';
import { SalidasComponent } from './pages/salidas/salidas';

import { AnalisisProblemasComponent } from './pages/analisis-problemas/analisis-problemas';
import { AnalisisObjetivosComponent } from './pages/analisis-objetivos/analisis-objetivos';
import { AnalisisAlternativasComponent } from './pages/analisis-alternativas/analisis-alternativas';
import { MatrizMarcoLogicoComponent } from './pages/matriz-marco-logico/matriz-marco-logico';
import { AnalisisInvolucradosLayoutComponent } from './pages/analisis-involucrados-layout/analisis-involucrados-layout';

export const routes: Routes = [
  { path: '', redirectTo: 'resumen', pathMatch: 'full' },
  { path: 'resumen', component: ResumenComponent },
  { 
    path: 'analisis', 
    component: AnalisisInvolucradosLayoutComponent,
    children: [
      { path: '', redirectTo: 'entradas', pathMatch: 'full' },
      { path: 'entradas', component: EntradasComponent },
      { path: 'herramientas', component: HerramientasComponent },
      { path: 'analisis', component: AnalisisComponent },
      { path: 'representacion', component: RepresentacionComponent },
      { path: 'salidas', component: SalidasComponent }
    ]
  },
  { path: 'analisis-problemas', component: AnalisisProblemasComponent },
  { path: 'analisis-objetivos', component: AnalisisObjetivosComponent },
  { path: 'analisis-alternativas', component: AnalisisAlternativasComponent },
  { path: 'matriz-marco-logico', component: MatrizMarcoLogicoComponent },
  { path: '**', redirectTo: 'resumen' }
];
