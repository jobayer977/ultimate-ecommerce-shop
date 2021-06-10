import { FormBuilder, Validators } from '@angular/forms';

import { AuthChangePasswordService } from 'src/app/@shared/services/authChangePassword.service';
import { AuthService } from './../../../../@shared/services/auth.service';
import { Component } from '@angular/core';
import { IFBaseResponse } from './../../../../@shared/interfaces/base.interface';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserService } from 'src/app/@shared/services/user.service';

@Component({
  templateUrl: './user-security.component.html',
  styleUrls: ['./user-security.component.scss'],
})
export class UserProfileChangePassword {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private authChangePasswordService: AuthChangePasswordService,
    private fb: FormBuilder,
    private notification: NzNotificationService
  ) {}

  readonly user: any = this.authService.decodedToken();

  //*CHANGE PHONE NUMBER
  chnPhnLoading = false;
  changePhoneNumberForm = this.fb.group({
    currentNumber: ['', Validators.required],
    newNumber: ['', Validators.required],
    confirmNumber: ['', Validators.required],
  });

  onSubmitChangePhoneNumber() {
    const { newNumber, confirmNumber, currentNumber } =
      this.changePhoneNumberForm.value;
    if (newNumber !== confirmNumber) {
      this.notification.error('Invalid PhoneNumber', '');
    } else {
      this.chnPhnLoading = true;
      this.userService
        .changePhoneNumber({
          oldPhoneNumber: currentNumber,
          newPhoneNumber: newNumber,
        })
        .subscribe((res: IFBaseResponse) => {
          this.chnPhnLoading = false;
          this.notification.success('PhoneNumber Updated', '');
          this.authService.logout();
        });
    }
  }

  // //* CHANGE PASSWORD
  chnPssLoading = false;
  changePasswordForm = this.fb.group({
    oldPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  onSubmitChangePassword() {
    const { oldPassword, newPassword, confirmPassword } =
      this.changePasswordForm.value;
    if (newPassword !== confirmPassword) {
      this.notification.error('Invalid Password', '');
    } else {
      this.chnPssLoading = true;
      this.authChangePasswordService
        .admin({
          id: this.user.id,
          oldPassword: oldPassword,
          newPassword: newPassword,
        })
        .subscribe((res: IFBaseResponse) => {
          this.chnPssLoading = false;
          this.notification.success('Password Updated', '');
          this.authService.logout();
        });
    }
  }
}
