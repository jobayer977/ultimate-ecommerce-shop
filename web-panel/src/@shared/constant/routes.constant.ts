export const routeConstant = {
	root: "/",
	departments: "/departments",
	brands: "/brands",
	productList: "/product",
	product: "/product/[id]",
}

export const normalizeImagePath = (url: string) => {
	return String(url).replace("https://res.cloudinary.com/", "/")
}
