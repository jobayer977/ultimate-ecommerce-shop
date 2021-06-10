import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './components/customers/customers.component';
import { NgModule } from '@angular/core';
import { UserProfileChangePassword } from './components/user-security/user-security.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileUpdateComponent } from './components/user-profile-update/user-profile-update.component';
import { UsersComponent } from './components/users/users.component';
import { VendorsComponent } from './components/vendors/vendors.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admins' },

  {
    path: 'admins',
    component: UsersComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
  {
    path: 'vendors',
    component: VendorsComponent,
  },
  {
    path: 'profile-update',
    component: UserProfileUpdateComponent,
  },
  {
    path: 'security',
    component: UserProfileChangePassword,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UsersRoutingModule {}
