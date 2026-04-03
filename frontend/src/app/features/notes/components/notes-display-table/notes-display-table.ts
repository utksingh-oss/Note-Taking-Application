import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/notes.model';
import { NotesService } from '../../services/notes.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-notes-display-table',
  imports: [DatePipe],
  templateUrl: './notes-display-table.html',
  styleUrls: ['./notes-display-table.css'],
})
export class NotesDisplayTable implements OnInit {
  notesList: Note[] = [];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesList = this.notesService.getNotes(1);
    // TODO: Replace hardcoded userId later
  }

  deleteNote(arg0: number) {
    throw new Error('Method not implemented.');
  }
  editNote(_t13: Note) {
    throw new Error('Method not implemented.');
  }
}
