const LAYOUT_PATH = '/content/';

export const routesConstant = {
  adminLogin: '/auth/admin/login',
  adminRegister: '/auth/admin/register',
  adminDashboard: '/content',
  admins: `${LAYOUT_PATH}users/admins`,
  vendors: `${LAYOUT_PATH}users/vendors`,
  customers: `${LAYOUT_PATH}users/customers`,
  userProfile: `${LAYOUT_PATH}users/profile`,
  userProfileUpdate: `${LAYOUT_PATH}users/profile-update`,
  userSecurity: `${LAYOUT_PATH}users/security`,

  department: `${LAYOUT_PATH}department`,

  category: `${LAYOUT_PATH}category`,
  categoryList: `${LAYOUT_PATH}category/list`,

  bannerList: `${LAYOUT_PATH}banner/list`,
  brandList: `${LAYOUT_PATH}brand/list`,
  productsList: `${LAYOUT_PATH}products/list`,
  defaultDashboard: `${LAYOUT_PATH}dashboard/default`,
  ordersList: `${LAYOUT_PATH}orders/list`,
};
