import { Component } from '@angular/core';
import { NotesDisplayTable } from '../../components/notes-display-table/notes-display-table';
import { HeaderSection } from '../../../../shared/header-section/header-section';

@Component({
  selector: 'app-notes-list-page',
  standalone: true,
  imports: [
    NotesDisplayTable,
    HeaderSection
  ],
  templateUrl: './notes-list-page.html',
  styleUrl: './notes-list-page.css',
})
export class NotesListPage {
  
}
