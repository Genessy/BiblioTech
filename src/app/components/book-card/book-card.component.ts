import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <figure
      class="bg-gray-800 flex flex-col md:flex-row gap-4 w-80 p-7 rounded-xl text-white items-center"
      style="min-height: 145px;"
    >
      <img src="assets/image.png" alt="" class="max-w-16 h-auto" />
      <div>
        <h2 class="font-bold">{{ title }}</h2>
        <div>
          <span class="text-sm">{{ categoryTitle }}</span>
          <div class="flex flex-wrap gap-3 mt-3">
            <span
              class="px-2 py-1 bg-green-600 rounded-full text-xs h-fit"
              *ngFor="let category of categories"
              style="line-height: 18px;"
              >{{ category }}</span
            >
          </div>
        </div>
      </div>
      <a [routerLink]="['book', id]">
        <span class="material-symbols-outlined ml-auto"> arrow_forward_ios </span>
      </a>
    </figure>
  `,
})
export class BookCardComponent {
  @Input() title!: string;
  @Input() categoryTitle!: string;
  @Input() categories!: string[];
  @Input() id!: number;
}
