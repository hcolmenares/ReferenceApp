import { Routes } from '@angular/router';
import { AuthGuard } from '@auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    title: 'Registro de Usuario',
    loadComponent: () => import('./auth/auth.component')
  },
  {
    path: 'home',
    title: 'Página Principal',
    loadComponent: () => import('./pages/home/home.component'),
    canActivate: [AuthGuard] // Ruta protegida
  },
  {
    path: 'supplies/:referCode',
    title: 'Módulo de referidos',
    loadComponent: () => import('./pages/supplies/supplies.component'),
    canActivate: [AuthGuard] // Ruta protegida
  },
  {
    path: 'supplies',
    title: 'Módulo de Alumnos',
    loadComponent: () => import('./pages/supplies/supplies.component'),
    canActivate: [AuthGuard] // Ruta protegida
  },
  {
    path: 'incentives',
    title: 'Módulo de Incentivos',
    loadComponent: () => import('./pages/incentivos/incentivos.component'),
    canActivate: [AuthGuard] // Ruta protegida
  },
  {
    path: 'refers',
    title: 'Módulo de Referidos',
    loadComponent: () => import('./pages/refers/refers.component'),
    canActivate: [AuthGuard] // Ruta protegida
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./shared/error-page/error-page.component')
  },
];
