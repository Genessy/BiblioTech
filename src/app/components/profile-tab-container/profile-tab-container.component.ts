import { Component, Input } from '@angular/core';
import { SolidButtonComponent } from '../shared/solid-button/solid-button.component';
import { ButtonAltComponent } from '../shared/button-alt/button-alt.component';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile-tab-container',
  standalone: true,
  imports: [
    SolidButtonComponent,
    ButtonAltComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  template: `
    <div
      class="flex flex-col justify-center items-center gap-3 "
      *ngIf="!isEditionMode; else editionMode"
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
        <app-solid-button
          label="Edition profil"
          icon="edit"
          (click)="isEditionMode = !isEditionMode"
        />
        <app-button-alt label="Deconnexion" icon="logout" (click)="logout()" />
      </div>
    </div>
    <ng-template #editionMode>
      <form [formGroup]="userForm" (submit)="editProfile()">
        <div *ngFor="let field of form" class="flex flex-col">
          <label [for]="field.name"> {{ field.label }}</label>
          <input
            [type]="field.type"
            [name]="field.name"
            [id]="field.name"
            [formControlName]="field.name"
          />
        </div>
        <div class="flex justify-center mt-9 gap-4">
          <app-solid-button
            label="Cancel"
            icon="edit"
            (click)="isEditionMode = !isEditionMode"
          />
          <app-button-alt label="Sauvegarder" icon="logout" type="submit" />
        </div>
      </form>
    </ng-template>
  `,
})
export class ProfileTabContainerComponent {
  @Input() user!: User;

  isEditionMode: boolean = false;
  constructor(private router: Router, private userService: UsersService) {}
  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/signup']);
  }

  userForm: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  form = [
    {
      type: 'text',
      label: 'Prenom',
      name: 'firstname',
      value: this.user?.firstname,
    },
    {
      type: 'text',
      label: 'Nom',
      name: 'lastname',
      value: this.user?.lastname,
    },
    {
      type: 'email',
      label: 'Email',
      name: 'email',
      value: this.user?.email,
    },
    {
      type: 'password',
      label: 'Password',
      name: 'password',
      value: this.user?.password,
    },
  ];

  editProfile(): void {
    console.log(this.userForm.value);
    if (this.userForm.value) {
      this.userService
        .modifyUser({ ...this.userForm.value, id: this.user.id })
        .subscribe((user) => {
          if (user) {
            this.user = user;
            this.isEditionMode = false;
          }
        });
    }
  }
}
