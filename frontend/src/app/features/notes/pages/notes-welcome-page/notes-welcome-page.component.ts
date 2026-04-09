import { Component, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol, IonFab, IonIcon, IonFabButton, IonHeader, IonToolbar, IonTitle, IonFabList, IonSearchbar, IonFooter } from '@ionic/angular/standalone';
import { NotesDisplayComponent } from '../../components/notes-display/notes-display.component';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-notes-welcome-page',
  templateUrl: './notes-welcome-page.component.html',
  styleUrls: ['./notes-welcome-page.component.scss'],
  standalone: true,
  imports: [IonSearchbar, IonFabList,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonFabButton,
    IonIcon,
    IonFab,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    NotesDisplayComponent, IonFooter],
})
export class NotesWelcomePageComponent implements OnInit {
  constructor() {
    addIcons({
      add
    });
  }

  ngOnInit() {}

  createNote() {
    throw new Error('Method not implemented.');
  }
}
