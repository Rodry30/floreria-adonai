import { Routes } from '@angular/router';
import { ResumenComponent } from './pages/resumen/resumen';
import { EntradasComponent } from './pages/entradas/entradas';
import { HerramientasComponent } from './pages/herramientas/herramientas';
import { AnalisisComponent } from './pages/analisis/analisis';
import { RepresentacionComponent } from './pages/representacion/representacion';
import { SalidasComponent } from './pages/salidas/salidas';

export const routes: Routes = [
  { path: '', redirectTo: 'resumen', pathMatch: 'full' },
  { path: 'resumen', component: ResumenComponent },
  { path: 'entradas', component: EntradasComponent },
  { path: 'herramientas', component: HerramientasComponent },
  { path: 'analisis', component: AnalisisComponent },
  { path: 'representacion', component: RepresentacionComponent },
  { path: 'salidas', component: SalidasComponent },
  { path: '**', redirectTo: 'resumen' }
];
