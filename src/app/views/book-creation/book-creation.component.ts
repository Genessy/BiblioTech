import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Router, RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { Book } from '../../interfaces/book';
import { UsersService } from '../../services/users.service';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { Categorie } from '../../interfaces/categorie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-creation',
  standalone: true,
  imports: [
    CardComponent,
    RouterModule,
    ReactiveFormsModule,
    DropdownComponent,
    CommonModule
  ],
  template: `
    <section class="flex justify-center items-center h-fit">
      <app-card class="my-auto">
        <form
          class="space-y-6 p-8"
          (submit)="createBook(); $event.preventDefault()"
        >
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">
            Créer un livre
          </h5>
          <div class="mb-2">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Titre du livre</label
            >
            <input
              type="title"
              name="title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Angular"
              [formControl]="pageTitle"
              required
            />
          </div>
          <div>
            <app-dropdown
              [categories]="categories"
              class="mt-2"
              (fetchBooksByCategoryEvent)="addCategory($event)"
            />
            <div class="mt-3 flex flex-wrap gap-3">
              <span *ngFor="let item of selecteCategories" class="p-2 bg-blue-600 text-white rounded-lg"> {{ item }}</span>
            </div>
          </div>
          <div>
            <label
              for="resume"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Description</label
            >
            <textarea
              id="resume"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your description here..."
              [formControl]="pageContent"
            ></textarea>
          </div>
          <button
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Créer le livre
          </button>
        </form>
      </app-card>
    </section>
  `,
})
export class BookCreationComponent {
  pageTitle = new FormControl('');
  pageContent = new FormControl('');

  constructor(
    private bookService: BooksService,
    private router: Router,
    private userService: UsersService
  ) {}
  categories: Categorie[] = [];
  ngOnInit() {
    this.bookService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  selecteCategories: string[] = [];
  addCategory(cat: string) {
    if (!this.selecteCategories.includes(cat)) {
      this.selecteCategories.push(cat);
    }
  }
  createBook() {
    const newBook  = {
      title: this.pageTitle.value ?? '',
      resume: this.pageContent.value ?? '',
      image: '',
      pages: [],
      author: this.userService.currentUser?.id,
      categories: this.selecteCategories,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.bookService.createBook(newBook).subscribe({
      next: (book) => {
        if (book) {
          console.log('Livre créé avec succès:', book);
          this.router.navigate(['/book', book.id]);
        } else {
          console.log(
            'La création du livre a réussi, mais la réponse est vide.'
          );
        }
      },
      error: (error) => {
        console.error('Erreur lors de la création du livre:', error);
      },
    });
  }
}
