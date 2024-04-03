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
      <app-books-tab-container  *ngIf="activeTab === 1" [books]="books" />
     <app-profile-tab-container *ngIf="activeTab === 0" [user]="user" />
    </section>
  `,
})
export class ProfileViewsContainerComponent {
  @Input() activeTab!: number;
  @Input() user!: User
  @Input() books!: Book[]
}
