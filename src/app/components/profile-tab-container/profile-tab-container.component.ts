import { Component, Input } from '@angular/core';
import { SolidButtonComponent } from '../shared/solid-button/solid-button.component';
import { ButtonAltComponent } from '../shared/button-alt/button-alt.component';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-tab-container',
  standalone: true,
  imports: [SolidButtonComponent, ButtonAltComponent],
  template: `
  <div
        class="flex flex-col justify-center items-center gap-3 "
      >
        <div class="flex flex-col justify-center items-center">
          <span class="text-lg font-bold">Prenom</span>
          <span>
            {{ user.firstname }}
          </span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <span class="text-lg font-bold">Nom</span>
          <span>
            {{ user.lastname }}
          </span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <span class="text-lg font-bold">Email</span>
          <span>
            {{ user.email }}
          </span>
        </div>
        <div class="flex justify-center mt-9 gap-4">
          <app-solid-button label="Edition profil" icon="edit" />
          <app-button-alt label="Deconnexion" icon="logout" (click)="logout()"/>
        </div>
      </div>
  `
})
export class ProfileTabContainerComponent {
@Input() user!: User;

constructor(private router: Router ) {}
  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/signup']);
  }
}
