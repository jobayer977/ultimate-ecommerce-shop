import { Component } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './layout-content.component.html',
  styleUrls: ['./layout-content.component.scss'],
})
export class LayoutContentComponent {
  isCollapsed: any = false;

  constructor() {}

  public getRouterOutletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
