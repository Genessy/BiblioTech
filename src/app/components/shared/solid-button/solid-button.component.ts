import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solid-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 align-middle focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      <span *ngIf="icon" class="material-symbols-outlined align-middle text-lg pr-2"> {{ icon }} </span>{{ label }}
    </button>
  `,
})
export class SolidButtonComponent {
  @Input() label!: String;
  @Input() icon!: String;
}
