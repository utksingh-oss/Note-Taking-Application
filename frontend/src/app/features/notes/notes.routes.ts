import { Routes } from "@angular/router";
import { NotesListPage } from "./pages/notes-list-page/notes-list-page";
import { NotesEditPage } from "./pages/notes-edit-page/notes-edit-page";

export const NOTES_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: NotesListPage
    },
    {
        path: 'edit',
        component: NotesEditPage
    }
];