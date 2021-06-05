import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from 'src/app/@shared/services/auth.service';
import { Injectable } from '@angular/core';
import { routesConstant } from 'src/app/@constant/routes.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([routesConstant.adminDashboard]);
      return false;
    } else {
      return true;
    }
  }
}
