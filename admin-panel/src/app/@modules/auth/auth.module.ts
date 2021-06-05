import * as AllIcons from '@ant-design/icons-angular/icons';

import { AntDesignModule } from 'src/app/@core/ant-design.module';
import { AuthAdminLoginComponent } from './components/auth-admin-login/auth-admin-login.component';
import { AuthAdminRegisterComponent } from './components/auth-admin-register/auth-admin-register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { IconDefinition } from '@ant-design/icons-angular';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

@NgModule({
  declarations: [AuthAdminRegisterComponent, AuthAdminLoginComponent],
  imports: [AuthRoutingModule, AntDesignModule, ReactiveFormsModule],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class AuthModule {}
