import { RouterModule, Routes } from '@angular/router';

import { AuthAdminLoginComponent } from './components/auth-admin-login/auth-admin-login.component';
import { AuthAdminRegisterComponent } from './components/auth-admin-register/auth-admin-register.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AuthAdminLoginComponent,
  },
  {
    path: 'admin/login',
    component: AuthAdminLoginComponent,
  },
  {
    path: 'admin/register',
    component: AuthAdminRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
