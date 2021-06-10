import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AntDesignModule } from './../../@core/ant-design.module';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './components/customers/customers.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserProfileChangePassword } from './components/user-security/user-security.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileUpdateComponent } from './components/user-profile-update/user-profile-update.component';
import { UsersComponent } from './components/users/users.component';
import { UsersRoutingModule } from './users-routeing.module';
import { VendorsComponent } from './components/vendors/vendors.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileUpdateComponent,
    UserProfileChangePassword,
    UsersComponent,
    CustomersComponent,
    VendorsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AntDesignModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
})
export class UsersModule {}
