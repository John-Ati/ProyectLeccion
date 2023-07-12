import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authhijoGuard: CanActivateChildFn = (childRoute, state) => {
  
  const token = localStorage.getItem('token');
  const router = inject(Router);
  if (token) {
    return true;
  } else {
    router.navigate([`/Login`])
    return false;
  }
 
};







