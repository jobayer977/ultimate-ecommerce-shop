import { NavigationEnd, Router } from '@angular/router';

import { Component } from '@angular/core';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-272SRQLDVL', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
