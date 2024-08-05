import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Sample',
    path: 'sample',
    loadComponent: () =>
      import('./modul/sample/sample.component').then((m) => m.SampleComponent),
  },

  // Later: only keep the following routes. Above is just for comparison
  {
    title: 'Dashboard',
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    title: 'Banner',
    path: 'banner',
    loadComponent: () =>
      import('./components/banner/banner.component').then(
        (m) => m.BannerComponent
      ),
  },
  {
    title: 'Header',
    path: 'header',
    loadComponent: () =>
      import('./components/header/header.component').then(
        (m) => m.HeaderComponent
      ),
  },
];
