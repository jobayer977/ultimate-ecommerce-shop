import { AntDesignModule } from './../../@core/ant-design.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserProfileChangePassword } from './components/user-security/user-security.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileUpdateComponent } from './components/user-profile-update/user-profile-update.component';
import { UsersRoutingModule } from './users-routeing.module';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileUpdateComponent,
    UserProfileChangePassword,
  ],
  imports: [
    UsersRoutingModule,
    AntDesignModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
})
export class UsersModule {}
