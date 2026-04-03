import { Routes } from "@angular/router";
import { NotesListPage } from "./pages/notes-list-page/notes-list-page";

export const NOTES_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: NotesListPage
    }
];