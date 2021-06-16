export const routeConstant = {
	root: "/",
	cart: "/cart",
	myAccount: "/user/myAccount",
	authLogin: "/auth/login",
	authRegister: "/auth/register",
	departments: "/departments",
	departmentsId: "/departments/[id]",
	brands: "/brands",
	productList: "/product",
	product: "/product/[id]",
	brandId: "/brands/[id]",
}

export const normalizeImagePath = (url: string) => {
	return String(url).replace("https://res.cloudinary.com/", "/")
}
