import { Component, signal } from '@angular/core';
import { PxRemConverter } from './shared/px-rem-converter/px-rem-converter';

@Component({
  selector: 'app-root',
  imports: [PxRemConverter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('screwdriver');
}
