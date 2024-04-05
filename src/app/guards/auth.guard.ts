import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(UsersService);
  const router = inject(Router)

  if (auth.currentUser) {
    return true;
  } else {
    router.navigateByUrl('/signup');
    return false;
  }
};
