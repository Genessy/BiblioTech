import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CardComponent, RouterModule],
  template: `
  <app-card>
    <form class="space-y-6 p-8" action="#">
      <h5 class="text-xl font-medium text-gray-900 dark:text-white">
        Inscrivez-vous à notre plateforme
      </h5>
      <div>
        <label
          for="lastname"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Nom</label
        >
        <input
          type="lastname"
          name="lastname"
          id="lastname"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Scorielle"
          required
        />
      </div>
      <div>
        <label
          for="firstname"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Prénom</label
        >
        <input
          type="firstname"
          name="firstname"
          id="firstname"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="Thibault"
          required
        />
      </div>
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >email</label
        >
        <input
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Mot de passe</label
        >
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
      <button
        [routerLink]="['/']"
        type="submit"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Inscription
      </button>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Déjà inscrit ?
        <a [routerLink]="['/signup']" class="text-blue-700 hover:underline dark:text-blue-500"
          >Connexion</a
        >
      </div>
    </form>
  </app-card>`,
})
export class RegistrationComponent {

}
