import { AuthService } from 'src/app/@shared/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInAnimation } from './../../data/router-animation/router-animation';
import { routesConstant } from 'src/app/@constant/routes.constant';

@Component({
  selector: 'app-content-layout',
  templateUrl: './layout-content.component.html',
  styleUrls: ['./layout-content.component.scss'],
  animations: [fadeInAnimation],
})
export class LayoutContentComponent {
  isCollapsed: any = false;
  readonly routesConstant = routesConstant;

  constructor(private authService: AuthService, private router: Router) {}

  public getRouterOutletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate([routesConstant.adminLogin]);
  }
}
