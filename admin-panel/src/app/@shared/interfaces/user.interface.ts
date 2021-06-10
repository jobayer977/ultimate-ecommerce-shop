import { IFBaseFilterQuery } from './base.interface';
export interface IFChangePhoneNumber {
  oldPhoneNumber?: string;
  newPhoneNumber?: string;
}

type TFUser = 'ADMIN' | 'CUSTOMER' | 'VENDOR';

export interface IFFilterUser extends IFBaseFilterQuery {
  type?: TFUser;
}

export interface IFUser {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  phoneNumber?: string;
  password?: string;
  type?: string;
  userInfo?: IFUserInfo;
}
export interface IFUserInfo {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  country?: string;
  birthDate?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
}
