import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  template: ` <section class="mt-11 mx-36">
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
      <h2 class="font-semibold">User name</h2>
    </div>
    <div class="mt-9">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select your country</label>
        <select
          id="tabs"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Profil</option>
          <option>Livres</option>
          <option>Parametres</option>
        </select>
      </div>
      <ul
        class="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
      >
        <li class="w-full focus-within:z-10">
          <a
            href="#"
            class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
            aria-current="page"
            >Profil</a
          >
        </li>
        <li class="w-full focus-within:z-10">
          <a
            href="#"
            class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >Livres</a
          >
        </li>
        <li class="w-full focus-within:z-10">
          <a
            href="#"
            class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >Parametres</a
          >
        </li>
      </ul>
    </div>
  </section>`,
})
export class ProfileComponent {}
