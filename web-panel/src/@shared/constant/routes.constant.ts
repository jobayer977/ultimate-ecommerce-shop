export const routeConstant = {
	root: "/",
	product: "/product",
}

export const normalizeImagePath = (url: string) => {
	return String(url).replace("https://res.cloudinary.com/", "/")
}
