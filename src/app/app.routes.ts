import { Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { ConnectionComponent } from './views/connection/connection.component';
import { ProfileComponent } from './views/profile/profile.component';
import { BookCreationComponent } from './views/book-creation/book-creation.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { BookDetailComponent } from './views/book-detail/book-detail.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'signup', component: ConnectionComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'profile/:id', component: ProfileComponent},
    {path: 'bookcreation', component: BookCreationComponent},
    {path: 'book/:id', component: BookDetailComponent},
];
