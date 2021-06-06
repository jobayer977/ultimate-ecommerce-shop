import { AntDesignModule } from './../../@core/ant-design.module';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UsersRoutingModule } from './users-routeing.module';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [UsersRoutingModule, AntDesignModule],
})
export class UsersModule {}
