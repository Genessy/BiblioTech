import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsideBarComponent } from '../../components/aside-bar/aside-bar.component';
import { Page } from '../../interfaces/page';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { Book } from '../../interfaces/book';
import { SolidButtonComponent } from '../../components/shared/solid-button/solid-button.component';
import { ButtonAltComponent } from '../../components/shared/button-alt/button-alt.component';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [
    CommonModule,
    AsideBarComponent,
    SolidButtonComponent,
    ButtonAltComponent,
    CommonModule,
    FormsModule,
  ],
  template: ` <app-aside-bar
      [pages]="bookDetails?.pages || []"
      (selectedPage)="getPage($event)"
      [activePage]="currentPage"
      [isAdminOrAuthor]="isBookAuthor"
    />
    <div class="p-4 sm:ml-64">
      <div class="flex justify-end">
        <app-solid-button
          label="Editier"
          icon="edit_note"
          *ngIf="isBookAuthor"
          (click)="toggleEditionMode()"
        />
      </div>
      <div
        class="p-4  border-gray-200  rounded-lg mt-14 flex justify-center flex-col"
        *ngIf="bookDetails"
      >
        <h1
          *ngIf="!isEditionMode; else editTitle"
          class="text-center mb-4 p-2 font-bold rounded align-middle"
        >
          {{ selectedPage?.title || bookDetails.title }}
        </h1>
        <ng-template #editTitle class="flex justify-center">
          <input
            [(ngModel)]="selectedPage?.title || bookDetails.title"
            type="text"
            name="title"
            id="title"
            class="'border-2 border-dashed rounded-md cursor-pointer text-center mb-4 p-2 font-bold align-middle"
          />
        </ng-template>

        <div class="flex flex-col gap-3 rounded p-2">
          <div *ngIf="!isEditionMode; else editParagraph">
            <ng-container *ngFor="let paragraph of paragraphs">
              <p class="text-justify">{{ paragraph }}</p>
            </ng-container>
          </div>
          <ng-template #editParagraph>
            <textarea
              [(ngModel)]="selectedPage?.content || bookDetails.resume"
              name=""
              id=""
              cols="30"
              rows="10"
              class="border-2 border-dashed cursor-pointer rounded-xl"
            >
              {{ paragraphs }}
            </textarea
            >
          </ng-template>
        </div>
      </div>
      <div
        class="flex justify-center mt-4"
        [ngClass]="{ 'justify-between': selectedPage }"
        *ngIf="!isEditionMode; else saveButton"
      >
        <app-button-alt
          label="Precedent page"
          *ngIf="selectedPage"
          (click)="getPage(selectedPage ? selectedPage.id - 1 : 0)"
        />
        <app-solid-button
          label="Prochaine page"
          (click)="getPage(selectedPage ? selectedPage.id + 1 : 0)"
        />
      </div>
      <ng-template #saveButton>
        <div class="flex justify-center">
          <app-solid-button label="Sauvegarder" (click)="savePageChanges()" />
        </div>
      </ng-template>
    </div>`,
})
export class BookDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
    private userService: UsersService
  ) {}

  postId!: number;
  bookDetails?: Book;
  selectedPage?: Page | null;
  currentPage: number = null!;
  isBookAuthor: boolean = false;
  isEditionMode: boolean = false;

  get pages(): Page[] | [] {
    return this.bookDetails?.pages! || [];
  }

  get paragraphs(): string[] {
    return (
      (this.selectedPage?.content || this.bookDetails?.resume || '').split(
        '\n\n'
      ) || []
    );
  }

  savePageChanges(): void {
    if (this.selectedPage) {
      
      this.bookService.modifyPage(this.selectedPage, Number(this.postId));
      
    } else {
      if (this.bookDetails) {
        
        this.bookService.modifyBook(this.bookDetails).subscribe((book) => {
          if (book) {
            this.bookDetails = book;
            this.isEditionMode = false;
          }
        });
      }
    }
  }

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.postId = Number(id);
      this.bookService.getBookById(this.postId).subscribe((book) => {
        this.bookDetails = book;
        this.isBookAuthor = this.userService.isUserBookAuthor(
          Number(this.bookDetails?.author)
        );
      });
    });
  }

  getPage(id: number) {
    this.selectedPage = this.pages?.find((page) => page.id === id);
    this.currentPage = id;
  }

  toggleEditionMode(): void {
    this.isEditionMode = !this.isEditionMode;
  }
}
