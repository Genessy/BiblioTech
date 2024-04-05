import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-alt',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
    >
      <span
        *ngIf="icon"
        class="material-symbols-outlined align-middle text-lg pr-2"
      >
        {{ icon }} </span
      >{{ label }}
    </button>
  `,
})
export class ButtonAltComponent {
  @Input() label!: String;
  @Input() icon!: String;
  @Input() type: String = 'button';
}
