import { Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { ConnectionComponent } from './views/connection/connection.component';
import { ProfileComponent } from './views/profile/profile.component';
import { BookCreationComponent } from './views/book-creation/book-creation.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { BookDetailComponent } from './views/book-detail/book-detail.component';
import { MyBooksViewComponent } from './views/my-books-view/my-books-view.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', canActivate: [authGuard], component: LandingComponent},
    {path: 'signup',  component: ConnectionComponent},
    {path: 'registration',  component: RegistrationComponent},
    {path: 'profile', canActivate: [authGuard],  component: ProfileComponent},
    {path: 'bookcreation', canActivate: [authGuard],  component: BookCreationComponent},
    {path: 'book/:id', canActivate: [authGuard],  component: BookDetailComponent},
    {path: 'myBooks', canActivate: [authGuard], component: MyBooksViewComponent}
];
