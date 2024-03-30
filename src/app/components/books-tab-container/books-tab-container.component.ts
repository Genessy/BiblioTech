import { Component, Input } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { Book } from '../../interfaces/book';
import { SolidButtonComponent } from '../shared/solid-button/solid-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books-tab-container',
  standalone: true,
  imports: [BookCardComponent, SolidButtonComponent, CommonModule],
  template: `
    <div class="flex flex-col gap-3">
      <div>
        <app-solid-button label="Ajouter un livre" icon="add_circle" />
      </div>
      <div class="flex flex-wrap gap-3">
        <app-book-card
          *ngFor="let book of books"
          [title]="book.title"
          categoryTitle="Categories"
          [categories]="book.categories"
        />
      </div>
    </div>
  `,
})
export class BooksTabContainerComponent {
  @Input() books!: Book[];
}
