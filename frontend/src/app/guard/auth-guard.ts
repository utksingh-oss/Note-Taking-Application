import { inject } from '@angular/core';
import {
  CanActivateFn,
  CanActivateChildFn,
  Router
} from '@angular/router';
import { UserService } from '../features/authentication/services/user.service';



function checkAuth(): boolean {

  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.isUserLoggedIn()) {
    return true;
  }

  router.navigate(['/']);

  return false;
}

export const authGuard: CanActivateFn = checkAuth;

export const authChildGuard: CanActivateChildFn = checkAuth;