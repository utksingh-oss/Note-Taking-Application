import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes-service';
import { Note } from '../../models/notes.model';
import { IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { NoteItemComponent } from '../note-item/note-item.component';
import { User } from 'src/app/features/authentication/models/users.model';
import { UserService } from 'src/app/features/authentication/services/user-service';

@Component({
  selector: 'app-notes-display',
  templateUrl: './notes-display.component.html',
  styleUrls: ['./notes-display.component.scss'],
  imports: [IonList, IonItem, IonLabel, NoteItemComponent],
  standalone: true
})
export class NotesDisplayComponent  implements OnInit {
  notes: Note[] = [];

  constructor(
    private notesService: NotesService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.notes = this.notesService.getNotes(1); // Replace 1 with the actual user ID
  }

  getUserNameById(userId: number): string {
    const user = this.userService.getUserById(userId);
    return user ? user.username : 'Unknown User';
  }

}
