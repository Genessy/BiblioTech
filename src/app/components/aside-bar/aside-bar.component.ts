import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Page } from '../../interfaces/page';
import { ButtonAltComponent } from '../shared/button-alt/button-alt.component';
import { SolidButtonComponent } from '../shared/solid-button/solid-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aside-bar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonAltComponent,
    SolidButtonComponent,
    RouterModule,
  ],
  template: ` <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-gray-800 border-r border-gray-200 sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div
      class="h-full px-3 pb-4 overflow-y-auto bg-gray-800 border-t border-gray-200"
    >
      <ul class="space-y-2 font-medium pt-5">
        <li>
          <span class="ms-3 font-bold text-white p-2">Pages</span>
        </li>
        <ng-container>
          <li class="mb-2" *ngFor="let page of pages">
            <span
              (click)="selectPage(page.id)"
              class="flex items-center p-2 ms-3 text-white rounded-lg hover:bg-gray-400 hover:text-blue-950 group cursor-pointer"
              [ngClass]="{
                'bg-gray-100 text-gray-950': activePage === page.id
              }"
              >{{ page.title }}</span
            >
          </li>
        </ng-container>
        <li>
          <ng-template
            #noPages
            class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 group"
          >
            <span class="ms-3 font-light text-white"
              >Tu a pas creer de pages</span
            >
          </ng-template>
        </li>
      </ul>
      <div class="flex justify-center pt-5">
        <router-link [routerLink]="['/bookcreation']">
          <app-solid-button
            label="Créer une page"
            icon="add_circle"
            class="mx-auto"
            *ngIf="isAdminOrAuthor"
          />
        </router-link>
      </div>
    </div>
  </aside>`,
})
export class AsideBarComponent {
  @Input() pages: Page[] | [] = [];
  @Input() activePage!: number
  @Input() isAdminOrAuthor: boolean = false;
  @Output() selectedPage = new EventEmitter<number>();

  currentPage: number = this.activePage!
  selectPage(id: number) {
    this.currentPage = id;
    this.selectedPage.emit(id);
  }
}
