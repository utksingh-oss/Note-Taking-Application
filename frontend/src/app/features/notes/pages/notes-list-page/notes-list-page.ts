import { Component } from '@angular/core';
import { NotesDisplayTable } from '../../components/notes-display-table/notes-display-table';

@Component({
  selector: 'app-notes-list-page',
  imports: [NotesDisplayTable],
  templateUrl: './notes-list-page.html',
  styleUrl: './notes-list-page.css',
})
export class NotesListPage {
  
}
