export const routeConstant = {
	root: "/",
	product: "/product/[id]",
}

export const normalizeImagePath = (url: string) => {
	return String(url).replace("https://res.cloudinary.com/", "/")
}
