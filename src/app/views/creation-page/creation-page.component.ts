import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
@Component({
  selector: 'app-creation-page',
  standalone: true,
  imports: [CardComponent, RouterModule, ReactiveFormsModule],
  template: `
    <section class="flex justify-center items-center h-fit">
      <app-card class="my-auto">
        <form
          class="space-y-6 p-8"
          (submit)="addPageToBook(); $event.preventDefault()"
        >
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">
            Créer un livre
          </h5>
          <div class="mb-2">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Titre de la page</label
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
            <label
              for="resume"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Contenu de la page</label
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
            Créer la page
          </button>
        </form>
      </app-card>
    </section>
  `,
})

export class CreationPageComponent {
  pageTitle = new FormControl('');
  pageContent = new FormControl('');
  bookId!: number
  
  constructor(private route: ActivatedRoute, private bookService: BooksService){}
  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.bookId = id;
    });
  }
  addPageToBook(){
    const pageInformation = {title : this.pageTitle, content: this.pageContent, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),}
    this.bookService.addPage(this.bookId, pageInformation).subscribe((page)=>{
      console.log(page)
    })
  }
  
  
}


