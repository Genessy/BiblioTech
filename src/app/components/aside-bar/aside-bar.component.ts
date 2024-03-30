import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Page } from '../../interfaces/page';

@Component({
  selector: 'app-aside-bar',
  standalone: true,
  imports: [CommonModule],
  template: ` <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-gray-800 border-r border-gray-200 sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-gray-800 border-t border-gray-200">
      <ul class="space-y-2 font-medium pt-5">
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span class="ms-3 font-bold text-white">Pages</span>
          </a>
        </li>
        <li>
          <a
          *ngFor="let page of pages"
            href="#"
            class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 group"
          >
            <span class="ms-3">{{page.title}}</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>`,
})
export class AsideBarComponent {
  @Input() pages: Page[] = []
}
