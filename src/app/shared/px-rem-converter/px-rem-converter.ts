import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiInputNumber } from '@taiga-ui/kit';

const ONE_REM_DEFAULT = 16;

@Component({
  selector: 'app-px-rem-converter',
  imports: [FormsModule, TuiTextfield, TuiInputNumber],
  templateUrl: './px-rem-converter.html',
  styleUrl: './px-rem-converter.css',
})
export class PxRemConverter {
  pxValue = signal<number | null>(16);
  remValue = signal<number | null>(1);

  updateFromPx(value: number): void {
    this.pxValue.set(value);
    this.remValue.set(Number.isFinite(value) ? value / ONE_REM_DEFAULT : null);
  }

  updateFromRem(value: number): void {
    this.remValue.set(value);
    this.pxValue.set(Number.isFinite(value) ? value * ONE_REM_DEFAULT : null);
  }
}
