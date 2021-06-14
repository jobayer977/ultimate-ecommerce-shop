export interface IFProduct {
	id?: string
	createdAt?: string
	updatedAt?: string
	isFeatured?: boolean
	isActive?: boolean
	isPopular?: boolean
	isHot?: boolean
	isNew?: boolean
	name?: string
	description?: string
	isAvailable?: boolean
	isNewArrival?: boolean
	isTopSelling?: boolean
	mrp?: string
	mrpExclVat?: null
	mrpInclVat?: null
	mrpVat?: string
	productCode?: string
	productImages?: string
	specification?: string
	stock?: string
	brand?: BrandOrCategoryOrDepartment
	category?: BrandOrCategoryOrDepartment
	department?: BrandOrCategoryOrDepartment
}
export interface BrandOrCategoryOrDepartment {
	id?: string
	createdAt?: string
	updatedAt?: string
	isFeatured?: boolean
	isActive?: boolean
	isPopular?: boolean
	isHot?: boolean
	isNew?: boolean
	name?: string
	slug?: null
	image?: string
}
