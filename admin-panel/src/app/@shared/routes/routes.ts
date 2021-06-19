import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: '',
    redirectTo: 'products',
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
  {
    path: 'products',
    loadChildren: () =>
      import('../../@modules/product/product.module').then(
        (m) => m.ProductModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../@modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('../../@modules/order/order.module').then((m) => m.OrderModule),
  },
];
