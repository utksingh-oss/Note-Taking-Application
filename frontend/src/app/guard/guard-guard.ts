import { CanActivateFn, CanActivateChildFn, Router } from '@angular/router';
import { UserService } from '../features/authentication/services/user-service';
import { inject } from '@angular/core';


function checkAuth(): boolean {
  const userService = inject(UserService);
  const router = inject(Router);
  
  if (userService.isUserLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  return checkAuth();
};

export const authChildGuard: CanActivateChildFn = (route, state) => {
  return checkAuth();
};

