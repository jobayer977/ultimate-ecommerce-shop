import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: CategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CategoryRoutingModule {}
