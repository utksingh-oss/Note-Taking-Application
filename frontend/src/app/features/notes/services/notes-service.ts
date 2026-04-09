import { Injectable } from '@angular/core';
import { Note } from '../models/notes.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {

  private notes: Note[] = [
    {
      id: 1,
      title: 'Shopping List',
      content: 'Buy milk, eggs, bread, and vegetables from the market.',
      createdAt: new Date('2026-03-28T09:30:00'),
      updatedAt: new Date('2026-03-28T09:30:00'),
      userId: 1,
    },
    {
      id: 2,
      title: 'Angular Study Plan',
      content: 'Revise components, services, routing, and dependency injection.',
      createdAt: new Date('2026-03-29T11:15:00'),
      updatedAt: new Date('2026-03-30T08:45:00'),
      userId: 1,
    },
    {
      id: 3,
      title: 'Workout Routine',
      content: 'Push-ups: 3x15, Squats: 3x20, Plank: 60 seconds.',
      createdAt: new Date('2026-03-30T07:00:00'),
      updatedAt: new Date('2026-03-30T07:00:00'),
      userId: 1,
    },
    {
      id: 4,
      title: 'Project Ideas',
      content: 'Build a Notes App with authentication and local storage support.',
      createdAt: new Date('2026-03-31T14:20:00'),
      updatedAt: new Date('2026-04-01T10:10:00'),
      userId: 1,
    },
    {
      id: 5,
      title: 'Meeting Notes',
      content: 'Discuss UI improvements and routing flow for the application.',
      createdAt: new Date('2026-04-01T16:00:00'),
      updatedAt: new Date('2026-04-01T16:30:00'),
      userId: 1,
    },

    // Notes for another user (for testing multi-user filtering)
    {
      id: 6,
      title: 'Travel Plan',
      content: 'Book tickets, reserve hotel, and prepare itinerary.',
      createdAt: new Date('2026-03-27T12:00:00'),
      updatedAt: new Date('2026-03-27T12:00:00'),
      userId: 1,
    },
    {
      id: 7,
      title: 'Reading List',
      content: 'Finish reading Angular documentation and design patterns.',
      createdAt: new Date('2026-03-29T18:30:00'),
      updatedAt: new Date('2026-03-29T18:30:00'),
      userId: 1,
    }
  ];

  lastGeneratedId: number = 7;

  getNotes(userId: number): Note[] {
    return this.notes.filter((notes) => notes.userId === userId);
  }

  addNote(title: string, content: string, userId: number): void {
    this.lastGeneratedId++;
    const newNote: Note = {
      id: this.lastGeneratedId,
      title,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId
    };
    this.notes.push(newNote);
  }

  updateNotes(updatedNote: Note): void {
    const index = this.notes.findIndex(
      (note) => note.id === updatedNote.id
    );

    if (index !== -1) {
      this.notes[index] = updatedNote;
    }
  }

  deleteNote(notesId: number): void {
    this.notes = this.notes.filter(
      (notes) => notes.id !== notesId
    );
  }

}