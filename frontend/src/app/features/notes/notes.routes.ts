import {Routes} from '@angular/router';
import { NotesWelcomePageComponent } from './pages/notes-welcome-page/notes-welcome-page.component';
import { NotesEditPageComponent } from './pages/notes-edit-page/notes-edit-page.component';


export const NOTES_ROUTES: Routes = [
    {
        path: '',
        component: NotesWelcomePageComponent
    }, 
    {
        path: ':noteId', 
        component: NotesEditPageComponent
    }
];

