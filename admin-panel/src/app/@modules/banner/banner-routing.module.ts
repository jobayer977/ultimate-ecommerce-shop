import { RouterModule, Routes } from '@angular/router';

import { BannerPageComponent } from './banner-page/banner-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: BannerPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BannerRoutingModule {}
