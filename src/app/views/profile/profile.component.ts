import { Component } from '@angular/core';
import { AsideBarComponent } from '../../components/aside-bar/aside-bar.component';
import { ProfileViewsContainerComponent } from '../../components/profile-views-container/profile-views-container.component';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user';
import { BooksService } from '../../services/books.service';
import { Book } from '../../interfaces/book';
interface Tab {
  id: number;
  label: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileViewsContainerComponent, CommonModule],
  template: ` <section class="mt-11" *ngIf="userInfo">
    <div class="mx-auto w-fit">
      <div
        class="relative w-14 h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mx-auto"
      >
        <svg
          class="absolute w-16 h-16 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <h2 class="font-semibold text-center">
        {{ userInfo.firstname + ' ' + userInfo.lastname }}
      </h2>
    </div>
    <div class="mt-9">
      <div class="sm:hidden">
        <select
          id="tabs"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          (change)="changeTab($event)"
        >
          <ng-template ngFor let-tab [ngForOf]="tabsname" let-i="index">
            <option [value]="tab.id">
              {{ tab.label }}
            </option>
          </ng-template>
        </select>
      </div>
      <ul
        class="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex"
      >
        <ng-template ngFor let-tab [ngForOf]="tabsname" let-i="index">
          <li class="w-full focus-within:z-10 ">
            <button
              class="inline-block w-full p-4 text-gray-900 bg-gray-100 border border-gray-200 rounded-lg"
              [ngClass]="{
                'bg-gray-900 text-white border border-gray-200':
                  activeTab === tab.id
              }"
              (click)="changeTab(tab.id)"
            >
              {{ tab.label }}
            </button>
          </li>
        </ng-template>
      </ul>
    </div>
    <app-profile-views-container
      [activeTab]="activeTab"
      [user]="userInfo"
      [books]="userBooks"
    />
  </section>`,
})
export class ProfileComponent {
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private bookserice: BooksService
  ) {}
  tabsname: Tab[] = [
    { id: 0, label: 'Profil' },
    { id: 1, label: 'Livres' },
  ];

  activeTab: number = 1;
  changeTab = (arg: Event | number): void => {
    if (arg instanceof Event) {
      const target = arg.target as HTMLSelectElement;
      const selectedIndex = target.selectedIndex;
      const selectedOption = target.options[selectedIndex];
      this.activeTab = Number(selectedOption.value);
    } else {
      const selectedOption = this.tabsname[arg];
      this.activeTab = selectedOption.id;
    }
  };

  userInfo!: User;
  userBooks!: Book[];
  currentUser = this.userService.currentUser;
  ngOnInit(): void {
    if (this.currentUser?.id !== null && this.currentUser) { 
      
      this.userService.getUserById(this.currentUser.id).subscribe((user) => {
        this.userInfo = user;
      });

      this.bookserice
        .getBooksByAuthor(this.currentUser.id)
        .subscribe((books) => {
          this.userBooks = books;
        });
    }
  }
}
