import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login', 
        loadChildren: () => import('./features/authentication/authentication.routes').then(m => m.AUTHENTICATION_ROUTES)
    },
    {
        path: 'notes',
        loadChildren: () => import('./features/notes/notes.routes').then(m => m.NOTES_ROUTES)
    }
];
