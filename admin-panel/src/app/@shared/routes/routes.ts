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
  {
    path: 'banner',
    loadChildren: () =>
      import('../../@modules/banner/banner.module').then((m) => m.BannerModule),
  },
  {
    path: 'brand',
    loadChildren: () =>
      import('../../@modules/brand/brand.module').then((m) => m.BrandModule),
  },
];
