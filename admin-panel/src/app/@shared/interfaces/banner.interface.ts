import { IFBaseFilterQuery, IFBaseMetaAttribute } from './base.interface';

import { BannerType } from '../enums';

export interface IFBannerCreate extends IFBaseMetaAttribute {
  image: string;
  title: string;
  url: string;
  type: BannerType;
}

export interface IFBannerFilter extends IFBaseFilterQuery {
  type?: BannerType;
}
