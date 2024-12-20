import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'portfolio',
    loadComponent: () => import('./portfolio/portfolio.component'),
    children: [
      {
        path: 'welcome',
        title: 'Welcome',
        loadComponent: () => import('./portfolio/pages/welcome-page/welcome-page.component')
      },
      {
        path: 'about-me',
        title: 'About me',
        loadComponent: () => import('./portfolio/pages/about-me-page/about-me-page.component')
      },
      {
        path: 'projects',
        title: 'Projects',
        loadComponent: () => import('./portfolio/pages/projects-page/projects-page.component')
      },
      // {
      //   path: 'project/:id',
      //   title: 'Project',
      //   loadComponent: () => import('./portfolio/pages/projects-page/projects-page.component')
      // },
      {
        path: '**',
        redirectTo: 'welcome'
      }
    ]
  },
  {
    path: '**',
    redirectTo:'/portfolio',
  }
];
