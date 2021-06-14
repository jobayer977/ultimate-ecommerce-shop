export interface IFDepartment {
	id: string
	createdAt: string
	updatedAt: string
	isFeatured: boolean
	isActive: boolean
	isPopular: boolean
	isHot: boolean
	isNew: boolean
	name: string
	slug?: null
	image: string
	categories?: null[] | null
}
