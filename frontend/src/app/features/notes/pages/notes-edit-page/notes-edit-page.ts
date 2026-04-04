import { Component } from '@angular/core';
import { NotesEditForm } from '../../components/notes-edit-form/notes-edit-form';
import { HeaderSection } from "../../../../shared/header-section/header-section";

@Component({
  selector: 'app-notes-edit-page',
  imports: [NotesEditForm, HeaderSection],
  templateUrl: './notes-edit-page.html',
  styleUrl: './notes-edit-page.css',
})
export class NotesEditPage {}
