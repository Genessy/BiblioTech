import { Component } from '@angular/core';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { Dropdown } from 'flowbite';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../../components/book-card/book-card.component';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [DropdownComponent, CommonModule, BookCardComponent],
  template: `
    <section class="pt-16 flex flex-col justify-center ma-auto px-8 ">
      <app-dropdown class="self-start" />
      <div class="flex flex-wrap gap-3 mt-9">
        <app-book-card *ngFor="let book of books" [title]="book.title" categoryTitle="Categories" [categories]="book.categories" />
      </div>
    </section>
  `,
})
export class LandingComponent {
  books: Book[] = [
    {
      id: 0,
      title: 'My fist book',
      resume: 'This is a beatiful resume of my first book',
      image: '',
      categories: ['fiction'],
      createdAt: '12/10/2045',
      updatedAt: '23/23/3544',
    },
    {
      id: 0,
      title: 'My second book',
      resume: 'This is a beatiful resume of my first book',
      image: '',
      categories: ['action', 'fiction'],
      createdAt: '12/10/2045',
      updatedAt: '23/23/3544',
    },
    {
      id: 0,
      title: 'My third book',
      resume: 'This is a beatiful resume of my first book',
      image: '',
      categories: ['action', 'fiction', 'romance'],
      createdAt: '12/10/2045',
      updatedAt: '23/23/3544',
    }
  ];
  
}
