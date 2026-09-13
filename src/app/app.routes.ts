import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            { path: '', loadComponent: () => import('./pages/hero/hero').then(m => m.Hero) },
            { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
            { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
        ]
    },
    { path: '**', loadComponent: () => import('./pages/pagenotfound/pagenotfound').then(m => m.Pagenotfound) }
];