import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthServiceService } from '../Modules/auth/auth-service.service';
import { map } from 'rxjs';

export const userAuthGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('jwt');
  if (!token) return false;
  const authService = inject(AuthServiceService);

  return authService.checkToken(token).pipe(
    map((response) => {
      return response.token;
    })
  );
};
