import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    title: 'Registro de Usuario',
    loadComponent: () => import('./auth/auth.component')
  },
  {
    path: 'home',
    title: 'Página Principal',
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: 'supplies/:referCode',  
    title: 'Módulo de Insumos',
    loadComponent: () => import('./pages/supplies/supplies.component')
  },
  {
    path: 'supplies',  
    title: 'Módulo de Insumos',
    loadComponent: () => import('./pages/supplies/supplies.component')
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
