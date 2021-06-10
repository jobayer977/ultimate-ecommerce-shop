import { RouterModule, Routes } from '@angular/router';

import { DepartmentComponent } from './department.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: DepartmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DepartmentsRouteingModule {}
