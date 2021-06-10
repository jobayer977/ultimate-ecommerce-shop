import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { IFBaseResponse } from 'src/app/@shared/interfaces/base.interface';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { UserInfoService } from './../../../../@shared/services/userInfo.service';
import { routesConstant } from './../../../../@constant/routes.constant';

@Component({
  templateUrl: './user-profile-update.component.html',
  styleUrls: ['./user-profile-update.component.scss'],
})
export class UserProfileUpdateComponent implements OnInit {
  userInfo: any = {};
  routesConstant = routesConstant;
  constructor(
    private fb: FormBuilder,
    private userInfoService: UserInfoService,
    private notification: NzNotificationService,
    private router: Router
  ) {}

  userInfoForm = this.fb.group({
    firstName: [this.userInfo?.firstName, Validators.required],
    lastName: [this.userInfo?.lastName, Validators.required],
    email: [this.userInfo?.email, Validators.required],
    city: [this.userInfo?.city || 'Dhaka', Validators.required],
    country: [this.userInfo?.country || 'Bangladesh', Validators.required],
    birthDate: [this.userInfo?.birthDate, Validators.required],
    gender: [this.userInfo?.gender, Validators.required],
  });

  //* Life cycles
  ngOnInit(): void {
    this.getUserInfo();
  }

  onSubmit() {
    this.userInfoService
      .updateCurrentUserInfo(this.userInfoForm.value)
      .subscribe((res: any) => {
        this.notification.success('Updated Successfully', '');
        this.router.navigate([routesConstant.userProfile]);
      });
  }

  //* Get loggedIn user info
  private getUserInfo() {
    this.userInfoService
      .getCurrentUserInfo()
      .subscribe((res: IFBaseResponse) => {
        this.userInfoForm.patchValue({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          city: res.data.city,
          country: res.data.country,
          birthDate: res.data.birthDate,
          gender: res.data.gender,
        });
      });
  }
}
