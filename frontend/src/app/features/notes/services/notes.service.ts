import { Injectable } from '@angular/core';
import { Note } from '../models/notes.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes: Note[] = [];

  getNotes(userId: number): Note[] {
    return this.notes.filter((notes) => notes.userId === userId);
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

  updateNotes(updatedNote: Note): void {
    const index = this.notes.findIndex((note) => note.id === updatedNote.id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
    }
  }

  deleteNote(notesId: number): void {
    this.notes = this.notes.filter((notes) => notes.id !== notesId);
  }
}
