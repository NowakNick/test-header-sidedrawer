import { Routes } from '@angular/router';

export const routes: Routes = [
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
  {
    title: 'Sidedrawer',
    path: 'sidedrawer',
    loadComponent: () =>
      import('./components/sidedrawer/sidedrawer.component').then(
        (m) => m.SidedrawerComponent
      ),
  },
];
