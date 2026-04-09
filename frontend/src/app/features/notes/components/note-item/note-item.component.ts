import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonButton, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { trashOutline, createOutline } from 'ionicons/icons';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
  imports: [IonIcon, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonButton],
})
export class NoteItemComponent  implements OnInit {
  @Input() title: string = '';
  @Input() author: string = '';
  @Input() createdDate: Date = new Date();
  @Input() content: string = '';



  constructor() { }

  ngOnInit() {
    addIcons({
      trashOutline,
      createOutline
    })
  }

  getTruncatedContent(): string {
    return this.content.length > 100 ? this.content.substring(0, 100) + '...' : this.content;
  }

}
