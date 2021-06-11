export interface IFBaseMetaSchema {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface IFBaseMetaAttribute {
  isFeatured?: boolean;
  isActive?: boolean;
  isPopular?: boolean;
  isHot?: boolean;
  isNew?: boolean;
}

export interface IFBaseFilterQuery {
  searchTerm?: string;
  page?: number;
  take?: number;
}
export interface IFBaseAttributeFilterQuery extends IFBaseMetaAttribute {
  searchTerm?: string;
  page?: number;
  take?: number;
}

export interface IFBaseResponse {
  data?: any;
  message?: string;
  success?: boolean;
}
export interface IFBaseFilterResponse extends IFBaseResponse {
  page?: number;
  take?: number;
  total?: number;
}
