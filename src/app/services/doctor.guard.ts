import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service/auth.service';

export const doctorGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isLoggedIn() && authService.getUserRole() == 'ROLE_DOCTOR'){
    return true;
  }
  router.navigate(['login']);
  return false;
}