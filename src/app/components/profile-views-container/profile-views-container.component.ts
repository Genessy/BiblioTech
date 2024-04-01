import { Component, Input } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { CommonModule } from '@angular/common';
import { Book } from '../../interfaces/book';
import { User } from '../../interfaces/user';
import { SolidButtonComponent } from '../shared/solid-button/solid-button.component';
import { ButtonAltComponent } from '../shared/button-alt/button-alt.component';
import { BooksTabContainerComponent } from '../books-tab-container/books-tab-container.component';
import { ProfileTabContainerComponent } from '../profile-tab-container/profile-tab-container.component';

@Component({
  selector: 'app-profile-views-container',
  standalone: true,
  imports: [
    BookCardComponent,
    CommonModule,
    SolidButtonComponent,
    ButtonAltComponent,
    BooksTabContainerComponent,
    ProfileTabContainerComponent
  ],
  template: `
    <section class="bg-gray-50 rounded-b p-6">
      <app-books-tab-container  *ngIf="activeTab === 1"/>
     <app-profile-tab-container *ngIf="activeTab === 0" [user]="user" />
    </section>
  `,
})
export class ProfileViewsContainerComponent {
  @Input() activeTab!: number;
  // books: Book[] = [
  //   {
  //     id: 0,
  //     title: 'My fist book',
  //     resume: 'This is a beatiful resume of my first book',
  //     image: '',
  //     categories: ['fiction'],
  //     createdAt: '12/10/2045',
  //     updatedAt: '23/23/3544',
  //   },
  //   {
  //     id: 0,
  //     title: 'My second book',
  //     resume: 'This is a beatiful resume of my first book',
  //     image: '',
  //     categories: ['action', 'fiction'],
  //     createdAt: '12/10/2045',
  //     updatedAt: '23/23/3544',
  //   },
  //   {
  //     id: 0,
  //     title: 'My third book',
  //     resume: 'This is a beatiful resume of my first book',
  //     image: '',
  //     categories: ['action', 'fiction', 'romance'],
  //     createdAt: '12/10/2045',
  //     updatedAt: '23/23/3544',
  //   },
  // ];

  user: User = {
    id: 0,
    firstname: 'John',
    lastname: 'Doe',
    email: 'johndoe@me.com',
    password: 'password',
    role: 'user',
  };
}
