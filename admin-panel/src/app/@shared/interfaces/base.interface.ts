export interface BaseResponse {
  data?: any;
  message?: string;
  success?: boolean;
}

export interface BaseMetaSchema {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
