import { Routes } from '@angular/router';
import { authGuard } from '../common/guards/auth.guard';
import { contenedorGuard } from '../common/guards/contenedor.guard';

export default [
  {
    path: 'dashboard',
    // canActivate: [authGuard, contenedorGuard],
    loadComponent: () => import('./admin-layout/admin-layout.component'),
    children: [
      {
        path: '',
        loadChildren: () => import('../modules/home/pages/dashboard/dashboard.routes'),
      },
    ],
  },
] as Routes;
