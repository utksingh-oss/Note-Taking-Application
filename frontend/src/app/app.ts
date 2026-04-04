import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSection } from './shared/header-section/header-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderSection],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend');
}
