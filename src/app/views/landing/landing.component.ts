import { Component } from '@angular/core';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { Dropdown } from 'flowbite';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { Book } from '../../interfaces/book';
import { BooksService } from '../../services/books.service';
import { Categorie } from '../../interfaces/categorie';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [DropdownComponent, CommonModule, BookCardComponent],
  template: `
    <section class="pt-16 flex flex-col justify-center ma-auto px-8 ">
      <app-dropdown
        class="self-start"
        [categories]="categories"
        (fetchBooksByCategoryEvent)="fetchBooksByCategory($event)"
      />
      <div class="flex flex-wrap gap-3 mt-9" *ngIf="booksList.length > 0; else noBook">
        <app-book-card
          *ngFor="let book of booksList"
          [title]="book.title"
          categoryTitle="Categories"
          [categories]="book.categories"
          [id]="book.id"
        />
      </div>
      <ng-template #noBook class="text-center"
        >Il y a pas de livres sur le categorie choisi</ng-template
      >
    </section>
  `,
})
export class LandingComponent {
  constructor(private bookService: BooksService) {}
  booksList: Book[] = [];
  categories!: Categorie[];
  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => {
      this.booksList = books;
    });

    this.bookService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  fetchBooksByCategory(category: string) {

    this.bookService.getBooksByCategory(category).subscribe((books) => {
      this.booksList = books;
    });
  }
}
