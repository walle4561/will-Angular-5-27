import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'other',
    pathMatch: 'full',
  },
  {
    path: 'color',
    loadComponent: () =>
      import('./color/color.component').then((c) => c.ColorComponent),
  },
  {
    path: 'color/:type',
    loadComponent: () =>
      import('./color/color.component').then((c) => c.ColorComponent),
  },
  {
    path: 'animations',
    loadComponent: () =>
      import('./animations/animations.component').then(
        (a) => a.AnimationsComponent
      ),
  },
  {
    path: 'animations/:type',
    loadComponent: () =>
      import('./animations/animations.component').then(
        (a) => a.AnimationsComponent
      ),
  },
  {
    path: 'borders',
    loadComponent: () =>
      import('./borders/borders.component').then((b) => b.BordersComponent),
  },
];
export default routes;
