import {
  IFBaseAttributeFilterQuery,
  IFBaseFilterQuery,
} from './../interfaces/base.interface';

export const baseFilterQueryUtils = (option: IFBaseFilterQuery) => {
  return `
    ${option.searchTerm ? `searchTerm=${option.searchTerm}` : ''}
    &${option.page ? `page=${option.page}` : ''}
    &${option.take ? `take=${option.take}` : ''}
  `;
};

export const baseAttributeFilterQueryUtils = (
  option: IFBaseAttributeFilterQuery
) => {
  return `searchTerm=${option.searchTerm || ''}&page=${
    option.page || ''
  }&take=${option.take || ''}&isFeatured=${option.isFeatured || ''}&isActive=${
    option.isActive || ''
  }&isPopular=${option.isPopular || ''}&isHot=${option.isHot || ''}&isNew=${
    option.isNew || ''
  }`;
};
