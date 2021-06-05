import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../@shared/guards/auth.guard';
import { AuthorizationGuard } from './../@shared/guards/authorization.guard';
import { LayoutContentComponent } from '../@shared/components/layout/layout-content.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from '../@modules/common/components/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/admin/login' },

  {
    path: 'auth',
    loadChildren: () =>
      import('../@modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthorizationGuard],
  },
  {
    path: 'admin',
    component: LayoutContentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
