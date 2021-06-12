import { RouterModule, Routes } from '@angular/router';

import { BrandPageComponent } from './brand-page/brand-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: BrandPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BrandRoutingModule {}
