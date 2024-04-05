import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categorie } from '../../interfaces/categorie';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
      (click)="openOptions = !openOptions"
    >
      Categories
      <svg
        class="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div
      *ngIf="openOptions"
      class="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
    >
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
        <li
          class="block px-4 py-2 hover:bg-gray-100"
          *ngFor="let category of categories"
          (click)="fetchBooksByCategory(category.label)"
        >
          {{ category.label }}
        </li>
      </ul>
    </div>
  `,
})
export class DropdownComponent {
  @Input() categories: Categorie[] = [];
  @Output() fetchBooksByCategoryEvent = new EventEmitter<string>();

  openOptions = false;
  fetchBooksByCategory(category: string) {
    this.openOptions = false;
    this.fetchBooksByCategoryEvent.emit(category);
  }
}
