import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { UserProfileChangePassword } from './components/user-security/user-security.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileUpdateComponent } from './components/user-profile-update/user-profile-update.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
  {
    path: 'profile-update',
    component: UserProfileUpdateComponent,
  },
  {
    path: 'security',
    component: UserProfileChangePassword,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UsersRoutingModule {}
