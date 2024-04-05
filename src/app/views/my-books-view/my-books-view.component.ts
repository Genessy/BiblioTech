import { Component } from '@angular/core';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { BooksService } from '../../services/books.service';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-my-books-view',
  standalone: true,
  template: `
    <section class="pt-16 flex flex-col justify-center ma-auto px-8 ">
      <div
        class="flex flex-wrap gap-3 mt-9"
        *ngIf="booksList.length > 0; else noBook"
      >
        <app-book-card
          *ngFor="let book of booksList"
          [title]="book.title"
          categoryTitle="Categories"
          [categories]="book.categories"
          [id]="book.id"
        />
      </div>
      <ng-template #noBook class="text-center"
        >Tu n'a pas encore publier des livres</ng-template
      >
    </section>
  `,
  imports: [DropdownComponent, BookCardComponent, CommonModule],
})
export class MyBooksViewComponent {
  constructor(private bookService: BooksService, private userService: UsersService) {}
  currentUser = this.userService.currentUser;
  booksList: Book[] = []
  ngOnInit() {
    if (this.currentUser?.id !== null && this.currentUser) {
      this.bookService.getBooksByAuthor(this.currentUser.id).subscribe((books) => {
        this.booksList = books
      });
    }
  }
}
