import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () =>
      import('../../@modules/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'department',
    loadChildren: () =>
      import('../../@modules/departments/departments.module').then(
        (m) => m.DepartmentModule
      ),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('../../@modules/category/category.module').then(
        (m) => m.CategoryModule
      ),
  },
];
