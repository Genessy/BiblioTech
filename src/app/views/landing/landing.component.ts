import { Component } from '@angular/core';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { Dropdown } from 'flowbite';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [DropdownComponent, CommonModule],
  template: `
    <section class="pt-16 flex flex-col ma-auto px-8 ">
      <app-dropdown  />
      <div class="flex flex-wrap m-auto mx-auto gap-3 mt-9">
        <figure class="bg-gray-800 flex flex-col md:flex-row gap-4 w-fit p-7 rounded-xl text-white items-center" *ngFor="let item of books">
          <img src="assets/image.png" alt="" class="max-w-16 h-auto" />
          <div>
            <h2 class="font-bold">{{item}}</h2>
            <div>
              <span class="text-sm">Categoria</span>
              <div class="flex flex-wrap gap-3 mt-3">
                <span class="px-2 py-1 bg-green-600 rounded-full text-xs"
                  >Tecnologia</span
                >
                <span class="px-2 py-1 bg-green-600 rounded-full text-xs"
                  >Tecnologia</span
                >
                <span class="px-2 py-1 bg-green-600 rounded-full text-xs"
                  >Tecnologia</span
                >
              </div>
            </div>
          </div>
          <span class="material-symbols-outlined"> arrow_forward_ios </span>
        </figure>
      </div>
    </section>
  `,
})
export class LandingComponent {
  books = ['article 1', 'article 2', 'article 3', 'article 4'];
}
