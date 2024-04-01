import { Component } from '@angular/core';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { Dropdown } from 'flowbite';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { Book } from '../../interfaces/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [DropdownComponent, CommonModule, BookCardComponent],
  template: `
    <section class="pt-16 flex flex-col justify-center ma-auto px-8 ">
      <app-dropdown class="self-start" />
      <div class="flex flex-wrap gap-3 mt-9">
        <app-book-card *ngFor="let book of booksList" [title]="book.title" categoryTitle="Categories" [categories]="book.categories" [id]="book.id"/>
      </div>
    </section>
  `,
})
export class LandingComponent {
  constructor(private bookService: BooksService) {}
  booksList: Book[] = [];
  
  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => {
      this.booksList = books;
      console.log(books);
      
    });

    this.bookService.getCategoryById(2).subscribe((pages) => {
      console.log(pages);
      
    });

    this.bookService.getCategories().subscribe((categories) => {
      console.log(categories);
      
    });
  }
}
