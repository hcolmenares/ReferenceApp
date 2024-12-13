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
    title: 'Módulo de Insumos',
    loadComponent: () => import('./pages/supplies/supplies.component'),
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
