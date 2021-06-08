import { Gender } from './../enums/index';
export interface IFUserInfo {
  firstName?: 'string';
  lastName?: 'string';
  city?: 'string';
  country?: 'string';
  birthDate?: 'string';
  email?: 'user@example.com';
  gender?: Gender;
}
