import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'charts',
    loadComponent: () =>
      import('./charts/charts.component').then((c) => c.ChartsComponent),
  },
  {
    path: 'tables',
    loadComponent: () =>
      import('./tables/tables.component').then((t) => t.TablesComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (d) => d.DashboardComponent
      ),
  },
  {
    path: 'utilities',
    loadChildren: () => import('./utilities/utilities.routes'),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (n) => n.NotFoundComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
