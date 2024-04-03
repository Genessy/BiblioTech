import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsideBarComponent } from '../../components/aside-bar/aside-bar.component';
import { Page } from '../../interfaces/page';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { Book } from '../../interfaces/book';
import { SolidButtonComponent } from '../../components/shared/solid-button/solid-button.component';
import { ButtonAltComponent } from '../../components/shared/button-alt/button-alt.component';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, AsideBarComponent, SolidButtonComponent, ButtonAltComponent],
  template: ` <app-aside-bar
      [pages]="bookDetails?.pages || []"
      (selectedPage)="getPage($event)"
      [activePage]="currentPage"
    />
    <div class="p-4 sm:ml-64">
      <div class="flex justify-end">
        <app-solid-button label="Editier" icon="edit_note"/>
      </div>
      <div
        class="p-4  border-gray-200  rounded-lg dark:border-gray-700 mt-14"
        *ngIf="bookDetails"
      >
        <h1
          class="text-center mb-4 p-2 font-bold border-2 border-dashed rounded align-middle"
        >
          {{ selectedPage?.title || bookDetails.title }}
        </h1>
        <div class="flex flex-col gap-3 border-2 border-dashed rounded p-2">
          <ng-container *ngFor="let paragraph of paragraphs">
            <p class="text-justify">{{ paragraph }}</p>
          </ng-container>
        </div>
      </div>
      <div class="flex justify-center mt-4" [ngClass]="{ 'justify-between': selectedPage}">
        <app-button-alt label="Precedent page" *ngIf="selectedPage" (click)="getPage(selectedPage ? selectedPage.id - 1 : 0)"/>
        <app-solid-button label="Prochaine page" (click)="getPage(selectedPage ? selectedPage.id + 1 : 0)" />
      </div>
    </div>`,
})
export class BookDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService
  ) {}

  postId!: number;
  bookDetails?: Book;
  selectedPage?: Page | null;
  currentPage: number = null!;

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

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.postId = Number(id);
      this.bookService.getBookById(this.postId).subscribe((book) => {
        this.bookDetails = book;
      });
    });
  }

  getPage(id: number) {
    this.selectedPage = this.pages?.find((page) => page.id === id);
    this.currentPage = id;
  }
}
