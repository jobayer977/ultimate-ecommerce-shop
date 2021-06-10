import { Component, OnInit } from '@angular/core';
import {
  IFBaseMetaSchema,
  IFBaseResponse,
} from './../../../../@shared/interfaces/base.interface';

import { IFUserInfo } from 'src/app/@shared/interfaces/userInfo.interface';
import { UserInfoService } from './../../../../@shared/services/userInfo.service';
import { routesConstant } from 'src/app/@constant/routes.constant';

export interface UserInfoResponse extends IFUserInfo, IFBaseMetaSchema {
  phoneNumber?: string;
}

@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  routesConstant = routesConstant;
  userInfo: UserInfoResponse = {};
  birthday = new Date(1988, 3, 15);
  constructor(private userInfoService: UserInfoService) {}

  ngOnInit() {
    this.getUserInfo();
  }

  private getUserInfo() {
    this.userInfoService
      .getCurrentUserInfo()
      .subscribe((res: IFBaseResponse) => {
        this.userInfo = {
          ...res.data,
          birthDate: new Date(res.data.birthDate),
        };
      });
  }
}
