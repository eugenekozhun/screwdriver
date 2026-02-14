import { TuiRoot } from '@taiga-ui/core';
import { Component, signal } from '@angular/core';
import { PxRemConverter } from './shared/px-rem-converter/px-rem-converter';

@Component({
  selector: 'app-root',
  imports: [PxRemConverter, TuiRoot],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('screwdriver');
}
