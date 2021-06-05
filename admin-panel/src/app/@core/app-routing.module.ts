import { RouterModule, Routes } from '@angular/router';

import { LayoutContentComponent } from '../@shared/components/layout/layout-content.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from '../@modules/common/components/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth' },

  {
    path: 'auth',
    loadChildren: () =>
      import('../@modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    component: LayoutContentComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
