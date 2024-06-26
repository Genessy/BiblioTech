import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [CardComponent, RouterModule, ReactiveFormsModule], 
  template: `
    <section class="flex justify-center">
      <app-card>
        <form class="space-y-6 p-8" [formGroup]="user" (ngSubmit)="singnUpUser()"> 
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">
            Connectez-vous à notre plateforme
          </h5>
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
              [formControlName]="'email'"
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
              [formControlName]="'password'"

              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Connexion
          </button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Pas encore inscrit ?
            <a
              [routerLink]="['/registration']"
              class="text-blue-700 hover:underline dark:text-blue-500"
              >Créer un compte</a
            >
          </div>
        </form>
      </app-card>
    </section>
  `,
})
export class ConnectionComponent {

  constructor(private userService: UsersService, private router: Router) {}
  user: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  singnUpUser(): void {
    
    if (this.user.valid) {
      
      this.userService.loginUser(this.user.value).subscribe((user) => {
        
        if (user) {
          this.router.navigate(['/']);
        }
      });
    }
  }
}
